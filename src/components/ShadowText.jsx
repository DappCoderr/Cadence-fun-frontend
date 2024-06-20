import { colorFunc, colorsType } from "../constants";
export default function ShadowText({
  color,
  children,
  size,
  className,
  ...props
}) {
  const sizes = {
    small: "highlight1",
    large: "highlight",
  };
  return (
    <p
      style={
        color
          ? {
              color:
                typeof color == "number"
                  ? colorFunc(colorsType[color])
                  : `var(--${color})`,
            }
          : {}
      }
      className={`${sizes[size || "small"]}   uppercase font-bold max-w-[476px] leading-[80%]   ${className} `}
    >
      {children}
    </p>
  );
}
