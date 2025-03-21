import { useState } from 'react';
import Modal from './Modal';
import ZoomedCard from './ZoomedCard';
import { ICard } from '../common/types';

const Card = ({ id, questionPreview, question, answer, color }: ICard) => {
  // State
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div
      className="rounded-lg shadow-2xl p-4 cursor-pointer w-3xs h-36"
      onClick={handleClick}
      style={{ background: color }}
    >
      <h2 className="mb-4"> Question </h2>
      <p> {questionPreview}</p>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ZoomedCard
          id={id}
          color={color}
          setShowModal={setShowModal}
          question={question}
          answer={answer}
        />
      </Modal>
    </div>
  );
};

export default Card;
