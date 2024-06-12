import Image from "next/image";
import { Gilda_Display } from "next/font/google";
import { cn } from "@/lib/utils";
const Gilda = Gilda_Display({ subsets: ["latin"], weight: "400" });
const ShowFirstTime: React.FC = () => {
  return (
    <>
      <div
        className={cn(
          "subpixel-antialiased md:invisible visible z-[150] flex flex-col fixed inset-0 justify-center items-center text-4xl pointer-events-none font-bold tracking-wide text-yellow-500 text-center animate-textFadeInOut",
          Gilda.className
        )}
      >
        <h1>
          HAYATO
          <br />
          FUJIWARA
        </h1>
        <h2 className="text-xl tracking-tight">Welcome to the portfolio</h2>
      </div>
      <div
        className={cn(
          "subpixel-antialiased md:visible invisible z-[150] flex flex-col fixed inset-0 justify-center items-center text-4xl pointer-events-none font-bold tracking-wide text-yellow-500 text-center animate-textFadeInOut",
          Gilda.className
        )}
      >
        <h1>HAYATO FUJIWARA</h1>
        <h2 className="text-xl tracking-tight">Welcome to the portfolio</h2>
      </div>
      <div
        className={cn(
          "w-full h-full z-[100] fixed inset-0 animate-fadeInOut pointer-events-none"
        )}
      >
        <Image
          src="/photo/DSC02392.jpg"
          fill
          alt=""
          quality={100}
          className="object-cover pointer-events-none"
        ></Image>
      </div>
    </>
  );
};
export default ShowFirstTime;
