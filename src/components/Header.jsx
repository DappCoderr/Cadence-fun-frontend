import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Image from "@/components/Image";
export default function Header() {
  return (
    <>
      <div className="h-10 relative  max-h-10 border-b-2 z-10  bg-bg border-black  flex flex-row justify-between items-center px-6 w-screen">
        <Logo />
        {/* wallet address */}
        <div className="flex items-center gap-4 h-6">
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
