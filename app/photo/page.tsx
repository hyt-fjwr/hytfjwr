import React from "react";
import profilePic from "/public/photo/DSC04541.jpg";
import ImageModal from "../components/ImageModal";
import { photos } from "../data/photo";

export default function page() {
  return (
    <>
      <div className="w-full h-full grid md:grid-cols-4 grid-cols-2 md:gap-3">
        {photos.map((photo) => (
          <div
            className="flex flex-col py-3 px-4 object-cover hover:scale-110 transition duration-500 overflow-hidden items-center"
            key={photo.imageUrl}
          >
            <ImageModal
              imageUrl={photo.imageUrl}
              flickrUrl={photo.flickrUrl}
              place={photo.place}
            />
            <p className="text-center text-xs md:text-base">
              Location : {photo.place}
            </p>
            <p className="text-center text-zinc-600 font-light text-xs md:text-base">
              Photo taken on {photo.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
