import { useNavigate } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import SideBarArea from "./SideBarArea";
import CreateArea from "./CreateArea";

function NewIssuePage({
  labelData,
  isAssignee,
  typeIssuelName,
  setTypeIssueName,
  leaveComment,
  setLeaveComment,
  newCreateIssue,
  postCreateIssue,
  whoIsAssignee,
  setWhoIsAssignee,
  selectdLabel,
  setSelectedLabel,
  check,
  setCheck,
  selectedAvatarUrl,
  setSelectedAvatarUrl,
  selectedLabelColor,
  setSelectedLabelColor,
}) {
  const navigate = useNavigate();

  return (
    <div className="mt-[24px] px-[16px] md:flex  md:px-[32px] xl:mx-[119.6px]">
      <img
        src="https://avatars.githubusercontent.com/u/105163825?s=80&v=4"
        alt=""
        className=" hidden md:rounded-[50%] md:w-[40px] md:h-[40px] md:block md:mr-[15px] md:border md:border-solid md:border-[#d0d7de]"
      />

      <CreateArea
        typeIssuelName={typeIssuelName}
        setTypeIssueName={setTypeIssueName}
        leaveComment={leaveComment}
        setLeaveComment={setLeaveComment}
        newCreateIssue={newCreateIssue}
        postCreateIssue={postCreateIssue}
        displayTitle={true}
        displayMargin={true}
        displaySubmit={true}
        createData={""}
        setcreateData={""}
        setTimeLineEvent={""}
      />
      <SideBarArea
        labelData={labelData}
        isAssignee={isAssignee}
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
      <div className="block md:hidden">
        <SubmitBtn
          onClick={() => {
            postCreateIssue().then(() => {
              setTimeout(() => {
                navigate("/issues");
              }, 1000);
            });
          }}
          typeIssuelName={typeIssuelName}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default NewIssuePage;
