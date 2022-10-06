import { MarkdownIcon } from "@primer/octicons-react";
const TextArea = ({ leaveComment, setLeaveComment }) => {
  return (
    <div className="n md:p-[8px] lg:border lg:border-solid lg:border-t-[#d0d7de] lg:border-r-0 lg:border-l-0 lg:border-b-0">
      <div className="hidde md:border md:border-solid md:border-[#d0d7de] md:rounded-[6px] md:block">
        <textarea
          className="border border-solid border-[#d0d7de] w-full min-h-[200px] my-[8px]  bg-[#f6f8fa] rounded-[6px]  placeholder:text-[#6E7781] placeholder:text-[14px] placeholder:tracking-wide  text-[14px] resize-y p-[10px]  focus:border-[2px] focus:border-solid focus:border-[#0969da] focus:outline-none focus:shadow-innerblue md:border-0 md:my-0"
          placeholder="Leave a comment"
          // value={leaveComment}
          // onChange={(e) => setLeaveComment(e.target.value)}
        />
        <label className="hidden  md:h-[30px]  md:border md:border-dashed md:border-[#D0D7DE] md:bg-[#f6f8fa] md:border-r-0 md:border-l-0 md:border-b-0 md:rounded-[6px] md:p-[5px] cursor-pointer md:leading-[20px] md:flex ">
          <input
            accept=".gif,.jpg,.svg,.png"
            type="file"
            className="  opacity-10 w-[60%] h-[30px] md:absolute  "
            onClick={() => {
              console.log("input");
            }}
          />
          <span className="md:rounded-[6px] md:relative text-[#6E7781]">
            Attach files by dragging & droppind, selecting or pasting them.
          </span>
          <a
            href="/"
            className="md:ml-auto md:relative md:right:0 md:align-bottom md:text-[#6E7781]"
          >
            <MarkdownIcon size={16} />
          </a>
        </label>
      </div>
    </div>
  );
};

export default TextArea;
