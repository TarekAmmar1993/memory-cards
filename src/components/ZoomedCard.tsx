import { useEffect, useState } from "react";
import { IZoomedCard } from "../common/types";
import CardCTA from "./CardCTA";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import firebaseApp from "../Firebase/firebase";
import { sanitizeAIText } from "@/lib/utils";

const ZoomedCard = ({ id, setShowModal, question, answer }: IZoomedCard) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const questionContainer = document.querySelector(".question-container");
    const answerContainer = document.querySelector(".answer-container");

    if (questionContainer) {
      questionContainer.innerHTML = sanitizeAIText(question);
    }
    if (answerContainer) {
      answerContainer.innerHTML = sanitizeAIText(answer);
    }
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleExit = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleDelete = async (e) => {
    const db = getFirestore(firebaseApp);
    await deleteDoc(doc(db, "Cards", id));
    handleExit(e);
  };

  return (
    <div
      className={`flip-card-inner h-[500px] w-[800px] transform rounded-2xl bg-amber-400 text-center transition duration-600 ease-in-out transform-3d ${
        flipped ? "rotate-y-180" : ""
      }`}
    >
      <div className="absolute h-full w-full p-8 backface-hidden">
        <h2 className="mb-12">Question</h2>
        <p className="question-container"> </p>
        <CardCTA
          handleExit={handleExit}
          handleDelete={handleDelete}
          handleFlip={handleFlip}
        />
      </div>
      <div className="absolute h-full w-full rotate-y-180 p-8 backface-hidden">
        <h2 className="mb-12">Answer</h2>
        <p className="answer-container"> </p>
        <CardCTA
          handleExit={handleExit}
          handleDelete={handleDelete}
          handleFlip={handleFlip}
        />
      </div>
    </div>
  );
};
export default ZoomedCard;
