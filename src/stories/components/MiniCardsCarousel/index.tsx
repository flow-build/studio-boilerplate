import { MiniCards } from './components/MiniCards';
import { MiniCardsCarouselProps } from './types';

export const MiniCardsCarousel = ({ miniCards }: MiniCardsCarouselProps) => {
  return (
    <>
      <MiniCards {...miniCards[0]}></MiniCards>
      <MiniCards {...miniCards[1]}></MiniCards>
      <MiniCards {...miniCards[2]}></MiniCards>
    </>
  );
};
