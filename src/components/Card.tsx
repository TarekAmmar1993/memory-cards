import { useState } from "react";
import Modal from "./Modal";
import ZoomedCard from "./ZoomedCard";
import { ICard } from "../common/types";
import Image from "next/image";
import dummyImg from "../assets/cp.jpg";
import { Badge } from "@/components/ui/badge";

const Card = ({ id, questionPreview, question, answer }: ICard) => {
  // State
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      className="font-default-color flex w-72 cursor-pointer flex-col gap-3 rounded-lg border-4 p-4 shadow-2xl odd:bg-[#EC781D] even:bg-[#43A3DB]"
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

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ZoomedCard
          id={id}
          setShowModal={setShowModal}
          question={question}
          answer={answer}
        />
      </Modal>
    </div>
  );
};

export default Card;
