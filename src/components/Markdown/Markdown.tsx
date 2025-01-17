import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = ({ markdown }: { markdown: string }) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default Markdown;
