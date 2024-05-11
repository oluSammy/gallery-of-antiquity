import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

interface IProps {
  value: string | undefined;
  onDescriptionChange: (_: string | undefined) => void;
}

const MDTextArea: React.FC<IProps> = ({ value, onDescriptionChange }) => {
  return (
    <div data-color-mode="light">
      <MDEditor
        height={200}
        value={value}
        onChange={onDescriptionChange}
        preview={"edit"}
        data-test="md-textarea"
      />
    </div>
  );
};

export default MDTextArea;
