interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-brown-dark ${className}`}
    >
      {children}
    </Tag>
  );
}
