import Image from "@/components/Image";
export default function KnightFrameBg({
  children,
  className,
  leftImg,
  rightImg,
  ...props
}) {
  return (
    <>
      <div
        className={`${className} h-full flex items-center justify-center relative pt-10 w-full`}
      >
        <LeftBg src={leftImg} />
        {children}
        <RightBg src={rightImg} />
      </div>
    </>
  );
}

const LeftBg = ({ src }) => {
  return (
    <>
      <Image
        src={src || "leftBorder1.png"}
        className="h-full absolute top-0  left-0 "
      />
    </>
  );
};
const RightBg = ({ src }) => {
  return (
    <>
      <Image
        src={src || "rightBorder1.png"}
        className="h-full absolute top-0  right-0"
      />
    </>
  );
};
