"use client";
import { Camera } from "lucide-react";
import ImageModal from "../../components/photo/ImageModal";
import { photos } from "../../data/photo";
import { motion, Variants } from "framer-motion";

export default function page() {
  const photoVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
      rotate: -15,
    },
    onscreen: {
      y: 0,
      opacity: 100,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <div>
        <div className="w-[21rem] md:w-[45rem] flex flex-row mx-auto">
          <div className="mt-5">
            <h1 className="text-black dark:text-white text-4xl font-bold flex items-center animate-in">
              Photos <Camera aria-hidden="true" className="h-8 w-8 ml-2" />
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
        <div className="w-full h-full grid md:grid-cols-4 grid-cols-2 md:gap-3">
          {photos.map((photo, index) => (
            <div
              key={photo.imageUrl}
              className="animate-in"
              style={{ "--index": index } as React.CSSProperties}
            >
              <motion.div
                className="flex flex-col py-3 px-4 object-cover overflow-hidden items-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={photoVariants}
                transition={{ type: "spring", delay: index }}
              >
                <ImageModal
                  imageUrl={photo.imageUrl}
                  flickrUrl={photo.flickrUrl}
                  place={photo.place}
                  date={photo.date}
                />
                <p className="text-center text-xs md:text-base">
                  Location : {photo.place}
                </p>
                <p className="text-center text-zinc-600 font-light text-xs md:text-base">
                  Photo taken on {photo.date}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
