import GameBackground from "./GameBackground";
import Header from "./Header";
import Image from "@/components/Image";
import Button from "@/components/Button";
import ShadowText from "@/components/ShadowText";
import Knight from "@/components/Knight";

export default function GamePage() {
  const isKnight = true;
  const knightInfo = {
    wins: 0,
    attack: 0,
    name: "Rico",
  };
  return (
    <>
      <Header />
      {isKnight ? <HasKnight {...knightInfo} /> : <NoKnight />}
    </>
  );
}

const HasKnight = ({ name = "Rico", wins, attack, ...props }) => {
  return (
    <>
      <GameBackground
        className={"flex flex-col items-center justify-center gap-8 !h-[90vh]"}
      >
        <ShadowText
          className="text-brown tracking-wider text-[64px]"
          size={"large"}
        >
          {name}
        </ShadowText>
        <Knight wins={wins} attack={attack} />
        <Button
          shadow="large"
          href="/play"
          className={` px-4 py-2 bg-accent rounded-[20px] `}
        >
          <Image src={"angels/princeSlash.png"} className={" h-[28px] mr-1"} />
          <span>Start Battle</span>
          <Image src={"angels/angelSlash.png"} className={" h-[28px] mr-1"} />
        </Button>
      </GameBackground>
    </>
  );
};

const NoKnight = () => {
  return (
    <GameBackground
      className={"flex flex-col items-center justify-center gap-8 !h-[95vh]"}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <Image
            src={"noKnight.gif"}
            className={"h-[80px] w-[80px] -mb-1 ml-1"}
          />
          <div
            style={{
              borderTop: "1.5px dashed #000",
              background:
                "linear-gradient(180deg, #D0EFFB -10.83%, #F4F4F4 82.5%)",
            }}
            className="border-t-[1.5px] h-6 border-black border-dotted w-[120px] "
          />
        </div>
        <h3 className="text-center max-w-[261px]">
          No Knight found in your wallet. Create one to start playing!
        </h3>
      </div>
      <Image src={"iconLongSword.png"} className={"animate-bounce h-[36px]"} />
      <Button shadow="large" href="/create" className={`flex-col px-6 py-4`}>
        <Image src={"angels/angelSlashBig.png"} className={" h-[71px] mr-1"} />
        <span>Create</span>
      </Button>
    </GameBackground>
  );
};
