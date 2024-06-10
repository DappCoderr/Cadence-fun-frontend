import { useNavigate } from "react-router-dom";

export default function Button({
  shadow,
  href,
  onClick,
  children,
  className,
  ...props
}) {
  const navigate = useNavigate();
  const shadows = {
    small: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    medium: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    large: "5px 6px 0px 0px var(--black)",
    none: "none",
  };
  return (
    <button
      onClick={() => {
        if (onClick) return onClick();
        if (href) {
          navigate(href);
        }
      }}
      style={{ boxShadow: shadows[shadow || "medium"] }}
      className={` border-2 border-black text-[20px] font-bold uppercase rounded-[10px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
