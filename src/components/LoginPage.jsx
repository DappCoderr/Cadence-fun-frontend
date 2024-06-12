import Logo from "@/components/Logo";
import Eclipse from "@/components/icons/Eclipse";
import Button from "@/components/Button";
import Image from "@/components/Image";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import "../config.js";

export default function LoginPage() {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    addr: undefined,
  });

  useEffect(() => fcl.currentUser.subscribe(setCurrentUser), []);

  console.log(currentUser.addr);

  return (
    <main className=" flex w-screen h-screen">
      {/* logo */}
      <Logo
        isVertical={true}
        className={"absolute top-3 left-1/2 -translate-x-1/2"}
      />
      {/* image text */}
      <ImageText />
      {/* bottom border */}
      <BottomBorder />
      {/* castle */}
      <div
        className="flex-1 border-r-2 border-black"
        style={{ backgroundImage: "url(castle.png)", backgroundSize: "cover" }}
      ></div>
      <div className="w-1/2 pl-10 box-border ">
        <div className="flex flex-col gap-8">
          <h1 className="relative  max-w-[492px] mt-[115px] ">
            Connect your{" "}
            <span className="absolute bg-bgOrange   -left-2 top-[78px] -bottom-1 -right-2 w-[381px] h-[84px]  -rotate-1"></span>
            <span className="text-bg z-10 relative">Flow wallet</span> to enter
            the mission
          </h1>
          {/* current user address */}
          {currentUser.loggedIn ? <UnauthenticatedState /> : <AuthedState />}
          <p className="tiny5 text-xl text-red">Let’s save the world!</p>
          <MovingBanner />
        </div>
      </div>
    </main>
  );
}

const AuthedState = () => {
  return (
    <>
      <Button
        href={"/game"}
        shadow={"large"}
        className="w-[285px] py-2 px-4 h-[110px]  flex-col"
        onClick={() => fcl.authenticate()}
      >
        <Image src={"angels/fallenAngel.png"} className="h-10 " />
        Connect
      </Button>
    </>
  );
};

const UnauthenticatedState = () => {
  return (
    <>
      <Button
        // href={"/game"}
        shadow={"large"}
        className="w-[285px] py-2 px-4 h-[110px]  flex-col"
        onClick={() => fcl.unauthenticate()}
      >
        <Image src={"angels/fallenAngel.png"} className="h-10 " />
        Disconnect
      </Button>
    </>
  );
};

const ImageText = () => {
  return (
    <>
      <p className="highlight absolute bottom-6 text-lightBrown text-[64px] uppercase font-bold max-w-[476px] leading-[80%] left-6 ">
        Cadence castle needs{" "}
        <span className="text-yellow">
          you
          <img
            src="iconSmileEmoji.png"
            alt="heart"
            className="inline-block relative bottom-1 w-8 h-8"
          />
          !
        </span>
      </p>
    </>
  );
};

const BottomBorder = () => {
  return (
    <>
      <div className="w-screen bg-dark h-2 absolute bottom-0 left-0">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
          <Eclipse
            pathProps={{
              fill: "var(--dark)",
            }}
          />
          <div className="absolute z-10 flex items-center justify-center bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white h-10 w-10">
            <img className=" rotate-180" src="iconLongSword.png" width={13} />
          </div>
        </div>
      </div>
    </>
  );
};

const MovingBanner = () => {
  const items = [
    {
      label: "Cadence Fun",
    },
    {
      src: "angels/angelSlash.png",
    },
    { label: "Connect wallet" },
    {
      src: "angels/wizardSlash.png",
    },
    { label: "Save the world" },
    { src: "logo.png" },
    {
      label: "Cadence Fun",
    },
    {
      src: "angels/angelSlash.png",
    },
  ];
  return (
    <>
      <div className=" bg-accent -rotate-6 w-[100%] bottom-10 h-[110px] left-[45%] absolute -z-10 border border-black px-4 py-2">
        <div className="moveLeft border h-full border-black border-dashed flex items-center flex-row gap-2 overflow-hidden">
          {items.map(({ label, src }, index) => {
            if (label) {
              return (
                <p
                  key={index}
                  className="text-black tiny5 leading-10 text-[48px] font-bold uppercase flex-shrink-0"
                >
                  {label}
                </p>
              );
            }
            if (src) {
              return <Image key={index} src={src} className="h-10" />;
            }
          })}
        </div>
      </div>
    </>
  );
};
