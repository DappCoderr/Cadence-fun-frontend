export default function ShadowText({ children, className, ...props }) {
  return (
    <p
      className={`highlight    text-[64px] uppercase font-bold max-w-[476px] leading-[80%]   ${className}`}
    >
      {children}
    </p>
  );
}
