import DiscussionItem from "../../components/DiscussionItem";

const SideBarArea = ({
  labelData,
  isAssignee,
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
}) => {
  return (
    <div className=" md:w-[390px] md:mt-[16px] lg:w-[340px]">
      <DiscussionItem
        list={isAssignee}
        type="assignee"
        title="Assignees"
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
      <DiscussionItem
        list={labelData}
        type="label"
        title="Labels"
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
      <div className=" border border-solid border-t-[hsla(210,18%,87%,1)] border-l-0 border-r-0 border-b-0 border-t-0">
        <details className="group">
          <summary className="flex text-[#57606a]  list-none font-semibold justify-between py-[4px] mb-[4px] group-hover:text-[#0969da] cursor-pointer">
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
