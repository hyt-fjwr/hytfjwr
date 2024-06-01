import SocialLinks from "@/app/components/about/SocialLinks";
import { User } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[21rem] flex flex-col md:w-[45rem]">
          <div className="mt-5">
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              About
              <User aria-hidden="true" className="h-8 w-7 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Get to know about me.
            </h2>
          </div>
        </div>
        <SocialLinks />
      </div>
    </>
  );
}
