import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Image from "@/components/Image";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import { useEffect } from "react";
import { useState } from "react";
import useCopyClipboard from "../hooks/useCopyClipboard";

export default function Header() {
  const { copy, isCopied } = useCopyClipboard();
  const location = useLocation();
  console.log(location.pathname);
  const isDocs = location.pathname === "/docs";
  const [currentUser, setCurrentUser] = useState(null);
  const address = currentUser?.addr;
  // Returns an unsubscribe function
  useEffect(
    () =>
      fcl.currentUser.subscribe((currentUser) => {
        console.log("The Current User", currentUser);
        setCurrentUser(currentUser);
      }),
    [],
  );

  return (
    <>
      <div className="h-10 flex-shrink-0 relative  max-h-10 border-b-2 z-10  bg-bg border-black  flex flex-row justify-between items-center px-6 w-screen">
        <Logo />
        {/* wallet address */}
        <div className="flex items-center gap-2 h-6">
          <h4 className="h-[10px] mr-2">
            <Link className=" text-red" to={isDocs ? "/game" : "/docs"}>
              {isDocs ? "Lets Play" : "Lets Study"}!
            </Link>
          </h4>
          <Button
            onClick={() => {
              window.open("https://twitter.com", "_blank");
            }}
            shadow="small"
            className="w-6 h-full rounded-lg"
          >
            <Image className="h-[14px]" src={"twitter.png"} />
          </Button>
          {address ? (
            <>
              <Button
                onClick={() => {
                  copy(address);
                }}
                shadow="small"
                className="px-2 h-full rounded-lg"
              >
                {isCopied ? (
                  <Image className="h-[14px]" src={"iconTick.png"} />
                ) : (
                  <>
                    <Image className="h-[14px]" src={"iconWallet.png"} />
                    <p className="h-[12px] uppercase">
                      {address.substring(0, 7)}...
                      {address.substring(address.length - 5)}
                    </p>
                  </>
                )}
              </Button>
              {/* logout */}
              <Button
                onClick={() => {
                  fcl.unauthenticate();
                }}
                shadow="small"
                className="w-6 h-full rounded-lg"
              >
                <Image className="h-[14px]" src={"iconExit.png"} />
              </Button>
            </>
          ) : (
            <Button href="/" shadow="small" className="px-2 h-full rounded-lg">
              <p className="h-[12px]">Connect</p>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
