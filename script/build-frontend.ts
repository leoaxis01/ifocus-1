import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildFrontend() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client for static deployment...");
  await viteBuild();
  
  console.log("Frontend build complete!");
}

buildFrontend().catch((err) => {
  console.error(err);
  process.exit(1);
});