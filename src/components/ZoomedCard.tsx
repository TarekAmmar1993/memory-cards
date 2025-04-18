import { useState } from 'react';
import firebase from '../Firebase/firebase';
import { IZoomedCard } from '../common/types';
import CardCTA from './CardCTA';

const ZoomedCard = ({ id, setShowModal, question, answer }: IZoomedCard) => {
  // State
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleExit = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleDelete = (e) => {
    firebase.firestore().collection('Cards').doc(id.toString()).delete();
    handleExit(e);
  };

  return (
    <div>
      <div
        className={`flip-card-inner rounded-2xl w-[800px] h-[500px] relative text-center transform-3d transition duration-600 ease-in-out transform bg-amber-400 ${
          flipped ? 'rotate-y-180' : ''
        }`}
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
};
export default ZoomedCard;
