"use client";
import { NotebookPen } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function page() {
  const links = [
    { href: "/blog/GenerateOGP", label: "GenerateOGP" },
    { href: "/blog", label: "Blog" },
  ];
  const pathname = usePathname();

  return (
    <>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-5">
          <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
            Blog
            <NotebookPen aria-hidden="true" className="h-8 w-8 ml-2" />
          </h1>
          <h2>
            The post will be updated on an occasionaly. <br />
            There are currently 1 posts.
          </h2>
        </div>
      </div>
      <div className="flex mt-4">
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
      </div>
    </>
  );
}
