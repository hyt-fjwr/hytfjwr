import React from "react";
import profilePic from "/public/photo/DSC04541.jpg";
import ImageModal from "../components/ImageModal";
import { photos } from "../data/photo";

export default function page() {
  return (
    <>
      <div className="flex w-full h-full ">
        {photos.map((photo) => (
          <div
            className="flex flex-col px-5 hover:scale-110 transition duration-500 cursor-pointer"
            key={photo.imageUrl}
          >
            <ImageModal
              imageUrl={photo.imageUrl}
              flickrUrl={photo.flickrUrl}
              place={photo.place}
            />
            <p className="text-center font">Location : {photo.place}</p>
            <p className="text-center text-zinc-600 font-light">
              Photo taken on {photo.date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
