import { placementPartners } from "@shared/schema";

export function PartnerLogos() {
  return (
    <div
      className="
        grid
        grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
        gap-6
        justify-items-center
        max-w-5xl
        mx-auto
      "
      data-testid="partner-logos"
    >
      {placementPartners.map((partner) => (
        <div
          key={partner.name}
          className="
            group
            w-full
            max-w-[220px]
            flex items-center justify-center
            p-6 md:p-8
            rounded-xl
            bg-card border
            animate-slide-up
            transition-all duration-300
            hover:shadow-lg
            hover:-translate-y-1
          "
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="
              h-12 md:h-14
              object-contain
              transition-transform duration-300
              group-hover:scale-110
            "
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
