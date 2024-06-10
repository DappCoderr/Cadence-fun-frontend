import Image from "@/components/Image";
export default function Logo({ isVertical, className, ...props }) {
  return (
    <>
      <div
        className={`flex ${isVertical ? "flex-col" : "flex-row"} items-center gap-1 ${className}`}
      >
        <Image className={"h-7 w-7"} src={"logo.png"} />
        <p className="" id="logo">
          <span className={isVertical ? "text-white" : ""}> Caden</span>ce Fun
        </p>
      </div>
    </>
  );
}
