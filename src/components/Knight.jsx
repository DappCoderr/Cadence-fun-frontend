import Image from "@/components/Image";
import KnightFrameBg from "./KnightFrameBg";
export default function Knight({ className, wins = 5, attack = 10, ...props }) {
  return (
    <div>
      {/* knight image */}
      <div
        style={{
          boxShadow:
            "0px 2px 7.6px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 7.6px 0px rgba(255, 255, 255, 0.25) inset",
        }}
        className={`${className} rounded-t-[20px] bg-brown border-black border-2 w-[284px] h-[336px] overflow-hidden`}
      >
        <KnightFrameBg>
          <Image src={"angels/wizardAngelIdle.png"} className={"h-32"} />
        </KnightFrameBg>
      </div>
      {/* details */}
      <div className="flex ">
        <div className="rounded-es-[20px] p-2 bg-black border-r border-t-0 bg-opacity-80 border-2 border-black text-white text-base flex items-center justify-center gap-2 w-full">
          <Image src={"iconSwords.png"} className={"h-3"} />
          <span className="leading-3">{attack}</span>
        </div>
        <div className="rounded-ee-[20px] border-l p-2 bg-black border-t-0 bg-opacity-80 border-2 border-black text-white text-base flex items-center justify-center gap-2 w-full">
          <Image src={"iconCrown.png"} className={"h-3"} />
          <span className="leading-3">{wins}</span>
        </div>
      </div>
    </div>
  );
}
