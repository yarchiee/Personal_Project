import { useEffect, useState } from "react";

import SideBarArea from "../NewIssuePage/SideBarArea";
import CreateArea from "../NewIssuePage/CreateArea";
import SubmitBtn from "../NewIssuePage/SubmitBtn";
import MobileAssignLabel from "./MobileAssignLabel";
import HeaderEdit from "./HeaderEdit";
import CommentItem from "./CommentItem";

type Props = {
  labelData: any;
  isAssignee: any;
  whoIsAssignee: any;
  setWhoIsAssignee: any;
  selectdLabel: any;
  setSelectedLabel: any;
  newCreateIssue: any;
  check: any;
  setCheck: any;
  selectedAvatarUrl: any;
  setSelectedAvatarUrl: any;
  selectedLabelColor: any;
  setSelectedLabelColor: any;
  typeIssuelName?: string;
  setTypeIssueName: any;
  leaveComment: any;
  setLeaveComment: any;
  postCreateIssue: any;
  timeLineEvent: any;
  setTimeLineEvent: any;
  perIssueData: any;
  setPerIssueData: any;
};

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
  timeLineEvent,
  setTimeLineEvent,
  perIssueData,
  setPerIssueData,
}: Props) {
  return (
    <>
      <div className="mt-[24px] mb-[16px]  px-[16px] md:mx-[32px] xl:mx-[119.6px] ">
        <HeaderEdit onClick perIssueData={perIssueData} />
        <div className="block md:hidden">
          <MobileAssignLabel perIssueData={perIssueData} />
        </div>
      </div>

      <div className=" px-[16px] md:flex  md:px-[32px] xl:mx-[119.6px]">
        <div className="md:flex md:flex-col md:w-full md:mr-[20px]">
          <div className="md:w-full">
            <CommentItem data={perIssueData} />

            {timeLineEvent?.map((item, index) => {
              if (item?.event !== "commented" && "mentioned") return <></>;
              return <CommentItem data={item} />;
            })}
          </div>
          <div className="flex">
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
              displayTitle={false}
            />
          </div>
        </div>

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
          <SubmitBtn disabled={true} onClick typeIssuelName={typeIssuelName} />
        </div>
      </div>
    </>
  );
}

export default IssuePage;
