import { VoidComponent } from "solid-js";
import DOMPurify from "dompurify";
import { Marked } from "marked";

export type MarkdownProps = {
  markdown: string;
};

const marked = new Marked({ async: false });
const render = (markdown: string) => {
  // we know this isn't a promise due to disabling async above
  const dangerous = marked.parse(markdown) as string;
  return DOMPurify.sanitize(dangerous);
};

const Markdown: VoidComponent<MarkdownProps> = ({ markdown }) => {
  return (
    <article
      innerHTML={render(markdown)}
      class="prose prose-invert xl:prose-lg"
    />
  );
};

export default Markdown;
