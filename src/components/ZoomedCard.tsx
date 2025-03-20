import { useState } from 'react';
import firebase from '../Firebase/firebase';
import { IZoomedCard } from '../common/types';
import CardCTA from './CardCTA';

function ZoomedCard({
  id,
  color,
  setShowModal,
  question,
  handleClick,
  answer,
}: IZoomedCard) {
  // State
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped(!flipped);
  }

  function handleExit(e: React.FormEvent<HTMLFormElement>) {
    e.stopPropagation();
    setShowModal(false);
  }

  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    firebase.firestore().collection('Cards').doc(id).delete();
    handleExit(e);
  }

  return (
    <div onClick={handleClick}>
      <div
        className={`flip-card-inner rounded-2xl w-[800px] h-[500px] relative text-center transform-3d transition duration-600 ease-in-out transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleClick}
        style={{ background: color }}
      >
        <div className="p-8 absolute w-full h-full backface-hidden">
          <h2 className="mb-12">Question</h2>
          <p> {question} </p>
          <CardCTA
            handleExit={handleExit}
            handleDelete={handleDelete}
            handleFlip={handleFlip}
          />
        </div>
        <div className="p-8 absolute w-full h-full backface-hidden rotate-y-180">
          <h2 className="mb-12">Answer</h2>
          <p> {answer}</p>
          <CardCTA
            handleExit={handleExit}
            handleDelete={handleDelete}
            handleFlip={handleFlip}
          />
        </div>
      </div>
    </div>
  );
}
export default ZoomedCard;
