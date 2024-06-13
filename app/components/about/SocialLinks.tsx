import React from "react";
import { socialLinks } from "../../data/socialLinks";
import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <>
      <div className="w-full gap-1 grid grid-cols-2 md:flex md:flex-row justify-center">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              className="h-9 md:h-10 rounded-xl border flex animate-in duration-200 hover:bg-primary/5"
              style={{ "--index": index } as React.CSSProperties}
            >
              <Image
                src={social.icon}
                width={25}
                height={25}
                alt={social.name}
                className="ml-3 scale-75 md:scale-100 dark:invert"
              />
              <div className="text-sm items-center flex ml-2 mr-3">
                {social.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
