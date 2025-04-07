import Card from './Card';
import { useContext } from 'react';
import { JobPrepContext } from '../context/context';
import { ICard } from '../common/types';

const Cards = () => {
  // context
  const { cards } = useContext(JobPrepContext);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-2 max-w-fit mx-auto">
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
