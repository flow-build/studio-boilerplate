export interface RecentPostsProps {
  title: string;
  urlRedirect?: string;
  price: Price;
  description: string;
}

interface Price {
  value: string;
  description?: string;
}
