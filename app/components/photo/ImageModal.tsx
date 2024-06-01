/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Loading from "../Loading";

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
    <div>
      <button onClick={openModal}>
        {isLoading ? (
          <Loading />
        ) : (
          <Image
            src={imageUrl}
            sizes="(max-width: 768px) 100vw, 50vw"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="flex md:w-60 md:h-60 w-28 h-28 object-cover cursor-zoom-in hover:scale-110 transition duration-500"
            alt={place}
            quality={70}
            onLoad={() => setIsLoading(true)}
            onLoadingComplete={() => setIsLoading(false)}
            loading="lazy"
          />
        )}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Original Image Modal"
        closeTimeoutMS={200}
        style={customStyles}
        className="w-full h-full overflow flex flex-col items-center"
      >
        <button
          onClick={closeModal}
          className="p-5 md:scale-90 absolute inset-0 flex flex-col md:h-full items-center justify-center "
        >
          <p className="font-bold hover:scale-110 m-2 duration-200 drop-shadow-md w-20 text-white ">
            CLOSE
          </p>
          <img
            src={flickrUrl}
            alt={place}
            className="md:h-full md:object-contain"
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