import Button from "@/components/Button";
import Image from "@/components/Image";
import Knight from "@/components/Knight";
import ShadowText from "@/components/ShadowText";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useKnightInfo from "../hooks/useKnightInfo";
import GameBackground from "./GameBackground";
import Header from "./Header";
import LoadingPage from "./LoadingPage";
import * as fcl from "@onflow/fcl";
// import { useSearchParams } from "react-router-dom";

export default function GamePage() {
  const { state } = useLocation();
  const lost = state?.lost; // gives who lost as 0 or 1. 0 is us so if 0 then lose. 1 is win
  const { hasKnight, knightInfo, loadingKnight, currentUser } = useKnightInfo(
    undefined,
    undefined,
    [lost],
  );
  // const [params] = useSearchParams();
  const isConnected = currentUser?.addr;
  console.log("currentUser", currentUser, isConnected);
  // console.log("params", params.get("status"));
  console.log("lost", lost);
  const isResultScreen = typeof lost === "number";
  const isLost = lost === 0;
  let noKnightProps = null;
  if (isResultScreen) {
    if (isLost) {
      noKnightProps = {
        message: "You lost!",
        buttonText: "Try Again",
        href: "/game",
        isResultScreen,
      };
    } else {
      noKnightProps = {
        message: "You won!",
        buttonText: "Play Again",
        href: "/game",
        img: { src: "win.gif" },
        isResultScreen,
      };
    }
  }
  if (loadingKnight) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
  return (
    <>
      <Header />
      {loadingKnight}
      {hasKnight && !isResultScreen ? (
        <HasKnight {...knightInfo} />
      ) : (
        <NoKnight {...noKnightProps} isConnected={isConnected} />
      )}
    </>
  );
}

const HasKnight = ({ name = "Rico", character = "wizard", ...props }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <GameBackground>
        <ShadowText
          color={Number(props.type)}
          className="text-brown tracking-wider text-[64px]"
          size={"large"}
        >
          {name}
        </ShadowText>
        <Knight character={character} {...props} />
        <Button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            await new Promise((r) => setTimeout(r, 2000));
            setLoading(false);
          }}
          shadow="large"
          href="/play"
          className={` px-4 py-2 bg-accent rounded-[20px] `}
        >
          <Image src={"angels/princeSlash.png"} className={" h-[28px] mr-1"} />
          <span>{loading ? "Finding opponent ..." : "Start Battle"}</span>
          <Image src={"angels/angelSlash.png"} className={" h-[28px] mr-1"} />
        </Button>
      </GameBackground>
    </>
  );
};

const NoKnight = ({
  message,
  buttonText,
  href,
  img,
  isResultScreen,
  isConnected,
}) => {
  console.log("isConnected", isConnected);
  return (
    <GameBackground>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <Image
            src={"noKnight.gif"}
            className={"h-[80px] w-[80px] -mb-1 ml-1 z-10"}
            {...img}
          />
          <div
            style={{
              borderTop: "1.5px dashed #000",
              background:
                "linear-gradient(rgb(208, 239, 251) -10.83%, rgb(241 241 241) 82.5%)",
            }}
            className="border-t-[1.5px] h-6 border-black border-dotted w-[120px] "
          />
        </div>
        <h3
          className={`text-center max-w-[261px] ${isResultScreen ? "text-[28px]]" : ""} `}
        >
          {message ||
            "No Knight found in your wallet. Create one to start playing!"}
        </h3>
      </div>
      <Image src={"iconLongSword.png"} className={`animate-bounce h-[36px]`} />
      {!isConnected ? (
        <Button href={"/"} shadow={"large"} className="p-4 h-10  flex-col">
          {/* <Image src={"angels/fallenAngel.png"} className="h-10" /> */}
          <span className="h-5">Connect Wallet</span>
        </Button>
      ) : (
        <Button
          shadow="large"
          href={href || "/create"}
          className={`flex-col px-6 py-4`}
        >
          <Image
            src={"angels/angelSlashBig.png"}
            className={` ${isResultScreen ? "h-[40px]" : "h-[71px]"} mr-1`}
          />
          <span className={isResultScreen ? "text-sm" : ""}>
            {buttonText || "Create"}
          </span>
        </Button>
      )}
    </GameBackground>
  );
};
