import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

export default function CursorSpark() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparks = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const addSpark = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        sparks.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 20 + Math.random() * 10,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks.current = sparks.current.filter((s) => s.life > 0);
      sparks.current.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life--;

        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.8)"; // violet glow
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      addSpark(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
