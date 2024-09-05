/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Loading from "../Loading";
import "../../globals.css";

interface ImageModalProps {
  imageUrl: any;
  flickrUrl: string;
  place: string;
  date: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  flickrUrl,
  place,
  date,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    /* 背景スクロール制限 */
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    /* 背景スクロール制限 */
    document.body.classList.remove("modal-open");
  };

  const customStyles = {
    content: {
      padding: "15px",
      background: "rgba(0, 0, 0, 0.9)",
    },
    overlay: {
      transition: "opacity 200ms ease-in-out",
    },
  };

  return (
    <div className="">
      <button onClick={openModal} className="">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="relative group">
            <div className="absolute flex z-10 group-hover:backdrop-blur-sm duration-500 group-hover:bg-black/30 w-full bottom-0 left-0">
              <span className="p-2 opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 text-white font-semibold truncate">
                {place}
              </span>
            </div>
            <div className="cursor-zoom-in group-hover:scale-110 transition duration-500">
              <Image
                src={imageUrl}
                sizes="(max-width: 768px) 100vw, 50vw"
                width={500}
                height={500}
                className="flex md:w-60 md:h-60 w-40 h-40 object-cover"
                alt={place}
                quality={70}
                placeholder="blur"
                blurDataURL={imageUrl}
                onLoad={() => {
                  console.log("Image loaded successfully.");
                  setIsLoading(false);
                }}
                loading="lazy"
              />
            </div>
          </div>
        )}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Original Image Modal"
        closeTimeoutMS={200}
        style={customStyles}
        className="w-full h-full overflow flex flex-col items-center top-10"
      >
        <button
          onClick={closeModal}
          className="p-5 md:scale-[0.85] absolute inset-0 flex flex-col md:h-full items-center justify-center md:top-8"
        >
          <p className="pt-12 md:pt-0 font-bold hover:scale-110 m-2 duration-200 drop-shadow-md w-20 text-white ">
            CLOSE
          </p>
          <Image
            src={imageUrl}
            width={2000}
            height={3000}
            alt={place}
            quality={100}
            placeholder="blur"
            blurDataURL="/loading.webp"
            className="md:h-full md:object-contain"
            loading="lazy"
          />
          <p className=" text-[12px] md:text-sm font-mono py-1 opacity-60 text-white">
            Location: {place} <br /> Photo taken on {date}
          </p>
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
