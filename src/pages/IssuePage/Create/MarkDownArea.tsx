import { marked } from "marked";
import "../../../prose.css";
const MarkDownArea = ({ leaveComment }) => {
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
    <div className="bg-[#fff] w-[98%] h-full md:p-[8px] border border-solid border-r-0 border-l-0 border-b-[2px] border-t-0 border-[#d0d7de] lg:border-t-[1px] lg:m-0">
      {!leaveComment && (
        <div className="mt-[20px] ml-[5px] text-[14px]">Nothing to preview</div>
      )}

      <div
        className="hidde h-[231px] ml-[10px] md:block lg:mt-[10px] prose"
        dangerouslySetInnerHTML={{ __html: marked(leaveComment ?? "") }}
      ></div>
    </div>
  );
};

export default MarkDownArea;
