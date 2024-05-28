import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "./Navigation";
import { ThemeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="h-16 flex md:justify-center items-center px-6 border-b justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={32}
            height={32}
            alt={""}
            className="dark:invert mr-5"
          />
        </Link>
        <Navigation />
        <ThemeToggle />
      </header>
    </>
  );
}
