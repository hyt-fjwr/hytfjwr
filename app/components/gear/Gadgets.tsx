import React from "react";
import Image from "next/image";
import { gears } from "@/app/data/gadgets";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Gadgets() {
  return (
    <>
      <div className="gap-5 grid grid-cols-2 h-20 ">
        {gears.map((gear, index) => (
          <div
            key={index}
            className="flex relative rounded-lg bg-primary/5 hover:bg-primary/10"
          >
            <Image
              src={gear.imageUrl}
              width={500}
              height={500}
              className="w-20 h-20 object-cover rounded-lg"
              alt=""
            />
            <div className="truncate p-2 select-none">
              <div className="text- font-bold">{gear.name}</div>
              <div className="mt-2 text-sm text-primary/60">
                {gear.description}
              </div>
              <Link href={gear.url} rel="noopener noreferrer" target="_blank">
                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4 mr-2 absolute bottom-2 right-0"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
