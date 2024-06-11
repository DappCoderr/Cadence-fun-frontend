import Image from "@/components/Image";
export default function GameBackground({ children, className, ...props }) {
  return (
    <>
      <div
        className={`${className} pt-10 w-screen flex flex-col items-center justify-center gap-8 h-[90vh]`}
      >
        <LeftBg />
        {children}
        <RightBg />
      </div>
    </>
  );
}

const LeftBg = () => {
  return (
    <>
      <Image
        src={"leftWall.png"}
        className="h-screen absolute top-0 -z-10 left-0 min-w-[390px]"
      />
    </>
  );
};
const RightBg = () => {
  return (
    <>
      <Image
        src={"rightWall.png"}
        className="h-screen absolute top-3 -z-10 right-0 min-w-[390px]"
      />
    </>
  );
};
