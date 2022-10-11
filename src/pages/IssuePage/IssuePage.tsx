import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBarArea from "../NewIssuePage/SideBarArea";
import CreateArea from "../NewIssuePage/CreateArea";
import SubmitBtn from "../NewIssuePage/SubmitBtn";
import NewIssueBtn from "../IssueList/NewIssueBtn";
import EditBtn from "../../components/EditBtn";

function IssuePage({
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
  typeIssuelName,
  setTypeIssueName,
  leaveComment,
  setLeaveComment,
  postCreateIssue,
}) {
  let { userId } = useParams();
  return (
    <>
      <div className="mt-[24px] mb-[16px] h-[114px] border border-solid  border-b-[hsla(210,18%,87%,1)] border-l-0 border-r-0  border-t-0 px-[16px] md:mx-[32px] xl:mx-[119.6px] ">
        <div>
          <div className="mb-[16px] flex">
            <EditBtn onClick />
            <NewIssueBtn onClick />
            <div className="flex-auto text-right h-[21px] leading-[21px] ">
              <a
                href="#/"
                className="text-[#0969da] text-[14px] pt-[4px] pb-[4px] "
              >
                jump to bottom{" "}
              </a>
            </div>
          </div>
          <div className="text-[26px] mb-[8px] h-[32.5px] leading-[32.5px]">
            <span className="min-w-[70px]">fetch</span>
            <span className="text-[#57606a] font-thin">#7</span>
          </div>
        </div>
      </div>
      <div className=" px-[16px] md:flex  md:px-[32px] xl:mx-[119.6px]">
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
            disabled={true}
            onClick
            postCreateIssue={postCreateIssue}
            typeIssuelName={typeIssuelName}
          />
        </div>
      </div>
    </>
  );
}

export default IssuePage;
