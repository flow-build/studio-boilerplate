import { Markdown } from 'stories/components/Markdown';

const mdx = `# Boilerplate Games

1. Go to the cat api website and sign up

![A medium cat image](https://cdn2.thecatapi.com/images/9qLSHCaQQ.jpg)

2. You will get an email with the key in it.

3. Copy the key from your email into the field on this page

A block quote with ~strikethrough~ and a URL: https://reactjs.org

## Lists
* [ ] todo
* [x] done
---

### A table:

| a | b |
| - | - |
`;

export default function Home() {
  return (
    <main>
      <center>
        <Markdown children={mdx} />
      </center>
    </main>
  );
}
