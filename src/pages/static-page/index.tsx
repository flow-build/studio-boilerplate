import { Markdown } from 'stories/components/Markdown';
import { mdx } from 'stories/components/Markdown/mockResult';

export default function StaticPage() {
  return (
    <div>
      <Markdown children={mdx} />
    </div>
  );
}
