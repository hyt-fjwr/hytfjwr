import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "./Navigation";
import { ThemeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <header className="h-16 flex justify-center items-center px-6 border-b">
        <Button variant="ghost" className="fond-bold text-xl" asChild>
          <Link href="/">HYT FJWR</Link>
        </Button>
        <Navigation />
        <ThemeToggle />
        <UserButton />
      </header>
    </>
  );
}
