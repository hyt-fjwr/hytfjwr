"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

interface ImageModalProps {
  imageUrl: any;
  flickrUrl: string;
  place: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl,
  flickrUrl,
  place,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      padding: "15px",
      borderRadius: "10px",
    },
    overlay: {
      transition: "opacity 200ms ease-in-out",
    },
  };

  return (
    <div>
      <button onClick={openModal}>
        <Image
          src={imageUrl}
          sizes="(max-width: 768px) 100vw, 50vw"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          className="flex md:w-60 md:h-60 w-28 h-28 object-cover cursor-zoom-in"
          alt={place}
          quality={100}
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Original Image Modal"
        closeTimeoutMS={200}
        style={customStyles}
        className="w-full h-full overflow-scroll flex flex-col items-center"
      >
        <button
          onClick={closeModal}
          className="p-5 md:scale-95 absolute inset-0 flex flex-col md:h-full items-center justify-center"
        >
          <p className="font-bold hover:scale-110 m-2 duration-200 drop-shadow-md">
            CLOSE
          </p>
          <img
            src={flickrUrl}
            alt={place}
            className="md:h-full md:object-contain"
          />
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
