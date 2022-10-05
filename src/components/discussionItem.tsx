import { GearIcon } from "@primer/octicons-react";
import PopOverList from "./PopOverList";

export default function DiscussionItem({ labelData, isAssignee, item }) {
  return (
    <div className="pt-[16px] mt-[16px] border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0">
      <details className="group">
        <summary className="flex text-[#57606a] hover:text-[#0969da] list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] ">
          {item.title}
          <GearIcon
            size={16}
            className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
          />
        </summary>
        <PopOverList labelData={labelData} isAssignee={isAssignee} />
      </details>
      No one - <button className="hover:text-[#0969da]">assign yourself</button>
    </div>
  );
}
