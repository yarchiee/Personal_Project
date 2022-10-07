import { GearIcon } from "@primer/octicons-react";
import { useState } from "react";
import PopOverList from "./PopOverList";
import LabelItem from "./LabelItem";

export default function DiscussionItem({
  title,
  type,
  list,
  whoIsAssignee,
  setWhoIsAssignee,
  selectdLabel,
  setSelectedLabel,
  newCreateIssue,
  check,
  setCheck,
  selectedAvatarUrl,
  setSelectedAvatarUrl,
  selectedLabelColor,
  setSelectedLabelColor,
}) {
  console.log(selectdLabel);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDetail = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mb-[16px] pb-[16px] border border-solid border-b-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-t-0">
      <details className="group" open={isOpen}>
        <summary className="flex text-[#57606a] hover:text-[#0969da] list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] ">
          {title}
          <GearIcon
            size={16}
            className="text-[#57606a] group-hover:text-[#0969da] cursor-pointer"
          />
        </summary>
        <PopOverList
          callback={toggleDetail}
          list={list}
          type={type}
          whoIsAssignee={whoIsAssignee}
          setWhoIsAssignee={setWhoIsAssignee}
          selectdLabel={selectdLabel}
          setSelectedLabel={setSelectedLabel}
          newCreateIssue={newCreateIssue}
          check={check}
          setCheck={setCheck}
          selectedAvatarUrl={selectedAvatarUrl}
          setSelectedAvatarUrl={setSelectedAvatarUrl}
          selectedLabelColor={selectedLabelColor}
          setSelectedLabelColor={setSelectedLabelColor}
        />
      </details>
      {title === "Assignees" && (
        <div>
          No one -
          <button className="hover:text-[#0969da]">assign yourself</button>
        </div>
      )}
      {title === "Labels" && <div>None yet</div>}
      {title === "Labels" &&
        newCreateIssue.labelColor.map((item, index) => {
          return (
            <LabelItem
              selectdLabel={selectdLabel[index]}
              selectedLabelColor={selectedLabelColor[index]}
            />
          );
        })}
    </div>
  );
}
