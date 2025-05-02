import { useState } from "react";
import Modal from "./Modal";
import ZoomedCard from "./ZoomedCard";
import { ICard } from "../common/types";
import Image from "next/image";
import dummyImg from "../assets/cp.jpg";
import { Badge } from "@/components/ui/badge";
import { createPortal } from "react-dom";

const Card = ({ questionPreview, question, answer }: ICard) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      className={`font-default-color flex scale-90 cursor-pointer flex-col gap-3 rounded-lg border-4 p-8 shadow-2xl odd:bg-[#EC781D] even:bg-[#43A3DB] ${
        showModal
          ? ""
          : "transition-transform duration-300 ease-in-out hover:scale-100"
      }`}
      onClick={handleClick}
    >
      <div className="mb-6 w-full overflow-hidden rounded-lg">
        <Image src={dummyImg} alt="dummy image" />
      </div>
      <h2 className="font-medium"> Question </h2>
      <p> {questionPreview}</p>
      <div className="mt-auto flex gap-2">
        <Badge variant="outline" className="bg-amber-300">
          React
        </Badge>
        <Badge variant="outline" className="bg-orange-600">
          Angular
        </Badge>
      </div>

      {showModal &&
        createPortal(
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <ZoomedCard
              setShowModal={setShowModal}
              question={question}
              answer={answer}
              questionPreview={questionPreview}
            />
          </Modal>,
          document.body,
        )}
    </div>
  );
};

export default Card;
