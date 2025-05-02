import { useState } from "react";
import { IZoomedCard } from "../common/types";
import CardCTA from "./CardCTA";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import firebaseApp from "../Firebase/firebase";

const ZoomedCard = ({
  setShowModal,
  question,
  answer,
  questionPreview,
}: IZoomedCard) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleExit = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleDelete = async (e) => {
    const db = getFirestore(firebaseApp);
    await deleteDoc(doc(db, "Cards", questionPreview));
    handleExit(e);
  };

  return (
    <div>
      <div
        className={`flip-card-inner h-[500px] w-[800px] transform rounded-2xl bg-amber-400 text-center transition duration-600 ease-in-out transform-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute h-full w-full p-8 backface-hidden">
          <h2 className="mb-12">Question</h2>
          <p> {question} </p>
          <CardCTA
            handleExit={handleExit}
            handleDelete={handleDelete}
            handleFlip={handleFlip}
          />
        </div>
        <div className="absolute h-full w-full rotate-y-180 p-8 backface-hidden">
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
