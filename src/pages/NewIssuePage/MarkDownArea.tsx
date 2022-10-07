import { marked } from "marked";
import "../../prose.css";
const MarkDownArea = ({ leaveComment, setLeaveComment }) => {
  const renderer = {
    listitem(text: string, booleantask: boolean, checked: boolean) {
      if (checked !== undefined) {
        return `<li class='check'>${text}</li>`;
      }
      return `<li>${text}</li>`;
    },
    paragraph(text: string) {
      const mentionText = text.match(/^@/g);
      const hashText = text.match(/^#/g);
      if (hashText) {
        return `<button class="hash">${text}</button>`;
      }
      return `<button ${mentionText ? "class=mention" : null}>${text}</button>`;
    },
  };
  marked.use({ renderer });

  return (
    <div className="w-[98%] h-full md:m-[8px]  border-r-0 border-l-0 ">
      <div
        className="hidde h-[231px] md:block prose"
        dangerouslySetInnerHTML={{ __html: marked(leaveComment) }}
      ></div>
    </div>
  );
};

export default MarkDownArea;
