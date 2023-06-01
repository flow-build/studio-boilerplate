export interface CarouselProps {
  data: ListIcon[];
  urlRedirect?: string;
  slidesPerView: number;
}

export interface ListIcon {
  label: string;
  icon: React.ReactNode;
  description: string;
  urlRedirect?: string;
}
