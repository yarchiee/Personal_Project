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
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetail = () => {
    setIsOpen(!isOpen);
  };
  const assignYourself = () => {
    setSelectedAvatarUrl([
      "https://avatars.githubusercontent.com/u/105163825?v=4",
    ]);
    setWhoIsAssignee(["yarchiee"]);
    setCheck(["yarchiee"]);
  };
  return (
    <div className=" mb-[14px] pb-[14px] border border-solid border-b-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-t-0">
      <details className="group" open={isOpen}>
        <summary className="flex text-[#57606a] hover:text-[#0969da] list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] cursor-pointer">
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

      {title === "Labels" && newCreateIssue.labelColor.length > 0 ? (
        newCreateIssue.labelColor.map((item, index) => (
          <LabelItem
            selectdLabel={selectdLabel[index]}
            selectedLabelColor={selectedLabelColor[index]}
          />
        ))
      ) : title === "Assignees" && newCreateIssue.avatarUrl.length > 0 ? (
        newCreateIssue.avatarUrl.map((item, index) => (
          <div className="flex mt-[8px] mb-[8px]">
            <img className="w-[20px] h-[20px] mr-[12px]" src={item} alt="" />
            <div className="leading-tight min-w-0">
              <div className="flex items-center">
                <div className="font-semibold text-[#24292f] truncate sm:pt-[2px]">
                  {whoIsAssignee[index]}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : title === "Assignees" ? (
        <div>
          No one -
          <button onClick={assignYourself} className="hover:text-[#0969da]">
            assign yourself
          </button>
        </div>
      ) : (
        <div>None yet</div>
      )}
    </div>
  );
}
