import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Image from "@/components/Image";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  const isDocs = location.pathname === "/docs";
  return (
    <>
      <div className="h-10 relative  max-h-10 border-b-2 z-10  bg-bg border-black  flex flex-row justify-between items-center px-6 w-screen">
        <Logo />
        {/* wallet address */}
        <div className="flex items-center gap-4 h-6">
          <Link className="tiny5 text-red" to={isDocs ? "/game" : "/docs"}>
            {isDocs ? "Lets Play" : "Lets Study"}!
          </Link>
          <Button shadow="small" className="px-2 h-full rounded-lg">
            <>
              <Image className="h-[14px]" src={"iconWallet.png"} />
              <p className=" uppercase">0x1234...5678</p>
            </>
          </Button>
          {/* logout */}
          <Button shadow="small" className="w-6 h-full rounded-lg">
            <Image className="h-[14px]" src={"iconExit.png"} />
          </Button>
        </div>
      </div>
    </>
  );
}
