import { useState } from 'react';
import Modal from './Modal';
import ZoomedCard from './ZoomedCard';
import { ICard } from '../common/types';

function Card({ id, questionPreview, question, answer, color }: ICard) {
  // State
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  return (
    <div
      className="rounded-lg shadow-2xl p-4 cursor-pointer min-w-3xs min-h-36"
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
          handleClick={handleClick}
          answer={answer}
        />
      </Modal>
    </div>
  );
}

export default Card;
