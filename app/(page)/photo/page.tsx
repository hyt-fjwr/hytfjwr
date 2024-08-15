"use client";
import { Camera, ChevronRight } from "lucide-react";
import ImageModal from "../../components/photo/ImageModal";
import { photos } from "../../data/photo";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function page() {
  return (
    <>
      <div>
        <div className="w-[21rem] md:w-[45rem] flex flex-row mx-auto">
          <div className="mt-5">
            <h1
              className={cn(
                `${inter.className}`,
                "text-black dark:text-white text-4xl font-bold flex items-center animate-in"
              )}
            >
              Photo <Camera aria-hidden="true" className="h-8 w-8 ml-2" />
            </h1>
            <div className="flex md:flex-row flex-col">
              <h2
                className="animate-in mt-2"
                style={{ "--index": 1 } as React.CSSProperties}
              >
                旅先で記録したお気に入りの写真。
              </h2>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.flickr.com/photos/186351996@N07/"
                className="flex flex-row items-center prose dark:prose-invert text-xs group hover:text-primary duration-100 pt-1 animate-in md:mt-1"
                style={{ "--index": 1 } as React.CSSProperties}
              >
                <p className="flex flex-row justify-center items-center hover:bg-slate-200 hover:dark:bg-slate-800 md:px-2 md:py-1 rounded-full duration-200">
                  See more photos on flickr
                  <ChevronRight
                    width={15}
                    height={15}
                    className="-left-2 group-hover:translate-x-1 duration-100"
                  />
                </p>
              </Link>
            </div>
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
