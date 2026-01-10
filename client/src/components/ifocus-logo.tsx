interface IFocusLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IFocusLogo({ className = "", size = "md" }: IFocusLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logos/ifocus.jpeg"
        alt="iFocus Info Solutions"
        className={`${sizeClasses[size]} w-auto object-contain`}
        loading="eager"
      />
    </div>
  );
}
