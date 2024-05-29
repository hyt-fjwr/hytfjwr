import React from "react";
import { socialLinks } from "../data/socialLinks";
import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <>
      <div className="w-2/3 grid grid-cols-2 gap-2">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              className="w-full h-12 rounded-xl border flex justify-between animate-in"
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="text-lg items-center flex ml-3">
                {social.name}
              </div>
              <Image
                src={social.icon}
                width={30}
                height={30}
                alt={social.name}
                className="mr-3"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
