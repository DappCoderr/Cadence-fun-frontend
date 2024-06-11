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
    small: "shadow1",
    medium: "shadow2",
    large: "shadow3",
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
      className={` border-2 flex gap-2 items-center justify-center border-black text-[20px] font-bold uppercase rounded-[10px] ${className} ${shadows[shadow || "medium"]}`}
      {...props}
    >
      {children}
    </button>
  );
}
