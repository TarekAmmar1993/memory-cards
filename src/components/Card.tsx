import { useState } from 'react';
import Modal from './Modal';
import ZoomedCard from './ZoomedCard';
import { ICard } from '../common/types';
import Image from 'next/image';
import dummyImg from '../assets/cp.jpg';

const Card = ({ id, questionPreview, question, answer }: ICard) => {
  // State
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      className="rounded-lg shadow-2xl p-4 cursor-pointer w-72 border-4   odd:bg-[#EC781D] even:bg-[#43A3DB] font-default-color"
      onClick={handleClick}
    >
      <div className="rounded-lg overflow-hidden mb-6 w-full ">
        <Image src={dummyImg} alt="dummy image" />
      </div>
      <h2 className="font-medium"> Question </h2>
      <p> {questionPreview}</p>
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
