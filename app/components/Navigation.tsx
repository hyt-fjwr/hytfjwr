"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/photo", label: "photo" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link) => (
        <Button
          className={cn(
            pathname === link.href && "bg-accent text-accent-foreground"
          )}
          variant="ghost"
          key={link.href}
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
}
