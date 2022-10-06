import DiscussionItem from "../../components/discussionItem";

const SideBarArea = ({ labelData, isAssignee }) => {
  return (
    <div className="md:w-[390px] lg:w-[340px]">
      <DiscussionItem list={isAssignee} type="assignee" title="Assignees" />
      <DiscussionItem list={labelData} type="label" title="Labels" />
      <div className=" border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0 border-t-0">
        <details className="group">
          <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da]">
            Helpful resources
          </summary>
        </details>
        <a href="/" className="text-[#0969da]">
          Github Community Guidelines
        </a>
      </div>
      <div className="mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0 "></div>
    </div>
  );
};

export default SideBarArea;
