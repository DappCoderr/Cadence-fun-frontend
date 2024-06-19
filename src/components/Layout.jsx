import { useEffect, useState } from "react";
import Image from "@/components/Image";
export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      // console.log("isMobile", isMobile, window.innerWidth);
      if (isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check on initial render
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <div className="absolute  top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40 flex items-center justify-center">
        <div className=" min-h-48 min-w-52 p-4 bg-white shadow-2xl flex items-center justify-center flex-col gap-3 text-center rounded-[10px] z-50 border-2 border-black">
          <Image src="noKnight.gif" className="h-20 " />
          <div className="flex flex-col items-center gap-1">
            <h4 className="w-2/3 capitalize leading-5">
              Switch to desktop or tab to access the game
            </h4>
            <p className="text-opacity-50 text-black text-xs">
              (Reload if already on tab or desktop)
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
}
