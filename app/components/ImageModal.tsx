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
            borderRadius: "10px", //👈 and here you can select border radius
          }}
          className="flex md:w-60 md:h-60 w-28 h-28 object-cover "
          alt={place}
          quality={100}
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Original Image Modal"
      >
        <button onClick={closeModal} className="font-bold">
          CLOSE
        </button>
        <img src={flickrUrl} alt={place} />
      </Modal>
    </div>
  );
};

export default ImageModal;
