import Image from "@/components/Image";
export default function LoadingPage({ message }) {
  return (
    <div className="w-screen h-screen flex items-center flex-col gap-4 justify-center">
      <Image src="/loading.gif" width={80} height={80} />
      <h3 className={`text-center max-w-[261px] text-[28px]] `}>
        {message || "Knights are getting ready to fight! Please wait..."}
      </h3>
    </div>
  );
}
