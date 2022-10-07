import { marked } from "marked";
const MarkDownArea = () => {
  return (
    <div className="w-[98%] h-full md:m-[8px]  border-r-0 border-l-0 ">
      <div
        className="hidde h-[231px] md:block prose"
        // dangerouslySetInnerHTML={{ __html: marked() }}
      ></div>
    </div>
  );
};

export default MarkDownArea;
