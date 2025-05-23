import Card from "./Card";
import { useCards } from "../hooks/customHooks";
import { ICard } from "../common/types";

const Cards = ({ selectedCategory }) => {
  const { cards, loading } = useCards();

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="mx-auto grid grid-cols-1 justify-items-center p-4 md:grid-cols-2 lg:grid-cols-3">
      {cards
        .filter(
          (card) =>
            card.category === selectedCategory || selectedCategory === "All",
        )
        .map((card: ICard) => (
          <Card
            id={card.id}
            key={card.id}
            questionPreview={card.questionPreview}
            question={card.question}
            answer={card.answer}
            category={card.category}
          />
        ))}
    </div>
  );
};

export default Cards;
