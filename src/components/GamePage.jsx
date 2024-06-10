import GameBackground from "./GameBackground";
import Header from "./Header";
import Image from "@/components/Image";
import Button from "@/components/Button";

export default function GamePage() {
  const isKnight = true;
  return (
    <>
      <Header />
      {isKnight ? <Knight /> : <NoKnight />}
    </>
  );
}

const Knight = () => {
  return (
    <>
      <GameBackground
        className={"flex flex-col items-center justify-center gap-8 !h-[95vh]"}
      >
        <Button shadow="large" href="/play" className={` px-6 py-4`}>
          <Image
            src={"angels/angelSlashBig.png"}
            className={" h-[71px] mr-1"}
          />
          <span>Create</span>
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
