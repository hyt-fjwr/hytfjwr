"use client";
import ImageModal from "../components/ImageModal";
import { photos } from "../data/photo";
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
      <div className="w-full h-full grid md:grid-cols-4 grid-cols-2 md:gap-3">
        {photos.map((photo) => (
          <motion.div
            className="flex flex-col py-3 px-4 object-cover overflow-hidden items-center"
            key={photo.imageUrl}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={photoVariants}
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
        ))}
      </div>
    </>
  );
}
