interface IFocusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IFocusLogo({ className = "", size = "md" }: IFocusLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Purple circle background */}
          <circle cx="50" cy="50" r="45" fill="#8B5CF6" />
          
          {/* Orange tie/person icon */}
          <path
            d="M50 20 C45 20 40 25 40 30 L40 35 C40 40 45 45 50 45 C55 45 60 40 60 35 L60 30 C60 25 55 20 50 20 Z"
            fill="#F97316"
          />
          <path
            d="M45 45 L45 75 C45 78 47 80 50 80 C53 80 55 78 55 75 L55 45 Z"
            fill="#F97316"
          />
          
          {/* Orange hand/focus symbol */}
          <circle cx="75" cy="35" r="15" fill="#F97316" opacity="0.9" />
          <circle cx="75" cy="35" r="8" fill="#8B5CF6" />
          <circle cx="75" cy="35" r="3" fill="#F97316" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-[#8B5CF6]">iFocus</span>
        <span className="text-xs text-[#F97316] leading-tight font-medium">Info Solutions</span>
      </div>
    </div>
  );
}