interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "green" | "dark" | "outline" | "outline-white" | "whatsapp";
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function CTAButton({
  children,
  variant = "green",
  href = "#",
  className = "",
  icon,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]";

  const variants = {
    green: "bg-amber text-white hover:bg-amber-light shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30",
    dark: "bg-brown-dark text-white hover:bg-brown-deep shadow-lg shadow-black/20",
    outline:
      "border-2 border-amber text-amber hover:bg-amber hover:text-white",
    "outline-white":
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
    whatsapp:
      "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-lg shadow-whatsapp/25 hover:shadow-xl hover:shadow-whatsapp/35",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
