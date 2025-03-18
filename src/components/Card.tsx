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
      className="block-col"
      onClick={handleClick}
      style={{ background: color }}
    >
      <h4 className="questionTitle"> Question </h4>
      <p className="question"> {questionPreview}</p>

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
