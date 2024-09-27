import { useEffect, useState } from "react";
import SideBarArea from "./Sidebar/SideBarArea";
import CreateArea from "./Create/CreateArea";
import MobileAssignLabel from "./MobileAssignLabel";
import HeaderEdit from "./HeaderEdit";
import CommentItem from "./Comment/CommentItem";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

function IssuePage() {
  const navigate = useNavigate();
  let { issueNumber } = useParams();
  const { userId, userRepo } = useParams();
  const [timeLineEvent, setTimeLineEvent] = useState([]);
  const [perIssueData, setPerIssueData] = useState<any>();
  const [labelData, setLabelData] = useState([]);
  const [isAssignee, setIsAssignee] = useState([]);
  const [typeIssuelName, setTypeIssueName] = useState("");
  const [leaveComment, setLeaveComment] = useState("");
  const [whoIsAssignee, setWhoIsAssignee] = useState("");
  const [selectdLabel, setSelectedLabel] = useState("");
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState("");
  const [selectedLabelColor, setSelectedLabelColor] = useState("");
  const [check, setCheck] = useState<string[]>([]);
  const [createData, setcreateData] = useState({
    issueNumber: Number(issueNumber),
    body: leaveComment,
  });
  const [updateIssue, setUpdateIssue] = useState({
    issueNumber: issueNumber,
    title: perIssueData?.title,
    body: perIssueData?.body,
    assignees: [...whoIsAssignee],
    labels: [...selectdLabel],
    avatarUrl: [...selectedAvatarUrl],
    labelColor: [...selectedLabelColor],
    checkone: [...check],
  });

  const getTimeLineEvent = () => {
    api.getTimeLineEvent(createData).then((res) => {
      setTimeLineEvent(res);
    });
  };
  const getAnIssue = () => {
    api
      .getAnIssue(createData)
      .then((res) => {
        setPerIssueData(res);
        console.dir("PER", res);
        getTimeLineEvent();
      })
      .catch(() => {
        navigate(`/${userId}/${userRepo}/issues`);
      });
  };
  useEffect(getAnIssue, []);
  const fetchAssigneeData = () => {
    api.getAssigneeMenber().then((res) => {
      setIsAssignee(res);
    });
  };
  useEffect(fetchAssigneeData, []);
  if (perIssueData === undefined) {
    return <></>;
  }
  return (
    <>
      <div className="mt-[24px] mb-[16px]  px-[16px] md:mx-[32px] xl:mx-[119.6px] md:px-0 ">
        <HeaderEdit
          onClick
          perIssueData={perIssueData}
          updateIssue={updateIssue}
          setUpdateIssue={setUpdateIssue}
          issueNumber={issueNumber}
          setPerIssueData={setPerIssueData}
        />
        <div className="block md:hidden">
          <MobileAssignLabel perIssueData={perIssueData} />
        </div>
      </div>

      <div className=" px-[16px] md:flex  md:px-[32px] xl:mx-[119.6px]">
        <div className="md:flex md:flex-col md:w-full md:mr-[20px]">
          <div className="md:w-full">
            <CommentItem
              type="issue"
              issueNumber={createData.issueNumber}
              data={perIssueData}
              setTimeLineEvent={setTimeLineEvent}
              setPerIssueData={setPerIssueData}
              updateIssue={updateIssue}
              setUpdateIssue={setUpdateIssue}
            />

            {timeLineEvent?.map((item, index) => {
              if (item?.event !== "commented" && "mentioned") return <></>;
              return (
                <CommentItem
                  key={item.id}
                  type="comments"
                  issueNumber={createData.issueNumber}
                  data={item}
                  setTimeLineEvent={setTimeLineEvent}
                  setPerIssueData={setPerIssueData}
                  updateIssue={updateIssue}
                  setUpdateIssue={setUpdateIssue}
                />
              );
            })}
          </div>
          <div className="flex pt-[16px] bordre border-solid border-t-[2px] border-r-0 border-l-0 border-b-0 border-[#d0d7de]">
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
              displayTitle={false}
              displayMargin={false}
              displaySubmit={false}
              createData={createData}
              setcreateData={setcreateData}
              setTimeLineEvent={setTimeLineEvent}
            />
          </div>
        </div>

        <SideBarArea
          labelData={labelData}
          setLabelData={setLabelData}
          isAssignee={isAssignee}
          setIsAssignee={setIsAssignee}
          whoIsAssignee={whoIsAssignee}
          setWhoIsAssignee={setWhoIsAssignee}
          selectdLabel={selectdLabel}
          setSelectedLabel={setSelectedLabel}
          check={check}
          setCheck={setCheck}
          selectedAvatarUrl={selectedAvatarUrl}
          setSelectedAvatarUrl={setSelectedAvatarUrl}
          selectedLabelColor={selectedLabelColor}
          setSelectedLabelColor={setSelectedLabelColor}
          updateIssue={updateIssue}
          perIssueData={perIssueData}
        />
      </div>
    </>
  );
}

export default IssuePage;
