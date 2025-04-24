import Card from "./Card";
import { useContext } from "react";
import { JobPrepContext } from "../context/context";
import { ICard } from "../common/types";

const Cards = () => {
  // context
  const { cards } = useContext(JobPrepContext);

  return (
    <div className="mx-auto grid grid-cols-1 justify-items-center p-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card: ICard) => (
        <Card
          id={card.id}
          questionPreview={card.questionPreview}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
};

export default Cards;
