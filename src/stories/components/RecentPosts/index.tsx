import { Card } from '../Generic';
import { RecentPostsProps } from './types';

export function RecentPosts({ title, price, urlRedirect, description }: RecentPostsProps) {
  return (
    <Card title={title} price={price} urlRedirect={urlRedirect} description={description}></Card>
  );
}
