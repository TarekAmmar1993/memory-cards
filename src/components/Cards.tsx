import Card from './Card';
import { useContext } from 'react';
import { JobPrepContext } from '../context/context';
import { ICard } from '../common/types';

function Cards() {
  //context
  const { cards } = useContext(JobPrepContext);

  return (
    <div className="block-wrap">
      {cards.map((card: ICard) => (
        <Card
          id={card.id}
          questionPreview={card.questionPreview}
          question={card.question}
          answer={card.answer}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default Cards;
