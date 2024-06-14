"use client";
import { Camera } from "lucide-react";
import ImageModal from "../../components/photo/ImageModal";
import { photos } from "../../data/photo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <>
      <div>
        <div className="w-[21rem] md:w-[45rem] flex flex-row mx-auto">
          <div className={cn(`${inter.className}`, "mt-5")}>
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              Photo <Camera aria-hidden="true" className="h-8 w-8 ml-2" />
            </h1>
            <h2
              className="animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              These are some of my favorite moments from my travels.
            </h2>
          </div>
        </div>
        <br />
        <div className="w-full h-full grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-0">
          {photos.map((photo, index) => (
            <div
              key={photo.imageUrl}
              className="animate-in md:w-60 md:h-60 w-40 h-40"
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="flex flex-col overflow-hidden items-center md:w-60 md:h-60 w-40 h-40 border">
                <ImageModal
                  imageUrl={photo.imageUrl}
                  flickrUrl={photo.flickrUrl}
                  place={photo.place}
                  date={photo.date}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
