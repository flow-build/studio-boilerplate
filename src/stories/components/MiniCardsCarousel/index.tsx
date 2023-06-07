import { MiniCards } from './components/MiniCards';
import { MiniCardsCarouselProps } from './types';

export const MiniCardsCarousel = ({ miniCards, arraySize }: MiniCardsCarouselProps) => {
  const array = miniCards.slice(0, arraySize);

  return (
    <>
      {array.map((miniCard) => (
        <MiniCards {...miniCard} key={miniCard.name}></MiniCards>
      ))}
    </>
  );
};
