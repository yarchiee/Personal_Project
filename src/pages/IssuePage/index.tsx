import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IssuePage from "./IssuePage";
import api from "../../services/api";
function IssuePageMain() {
  const navigate = useNavigate();
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
  let { issueNumber } = useParams();
  const newCreateIssue = {
    title: typeIssuelName,
    body: leaveComment,
    assignees: [...whoIsAssignee],
    labels: [...selectdLabel],
    avatarUrl: [...selectedAvatarUrl],
    labelColor: [...selectedLabelColor],
    checkone: [...check],
    issueNumber: issueNumber,
  };
  const postCreateIssue = async () => {
    await api.createIssue(newCreateIssue);
  };
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);
  const getTimeLineEvent = () => {
    api.getTimeLineEvent(newCreateIssue).then((res) => {
      setTimeLineEvent(res);
      console.log("TimeLine", res);
    });
  };
  const getAnIssue = () => {
    api
      .getAnIssue(newCreateIssue)
      .then((res) => {
        setPerIssueData(res);
        console.dir("PER", res);
        getTimeLineEvent();
      })
      .catch(() => {
        navigate("/issues");
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
      <IssuePage
        labelData={labelData}
        setLabelData={setLabelData}
        isAssignee={isAssignee}
        setIsAssignee={setIsAssignee}
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
        setTypeIssueName={setTypeIssueName}
        leaveComment={leaveComment}
        setLeaveComment={setLeaveComment}
        postCreateIssue={postCreateIssue}
        timeLineEvent={timeLineEvent}
        setTimeLineEvent={setTimeLineEvent}
        perIssueData={perIssueData}
        setPerIssueData={setPerIssueData}
      />
    </>
  );
}
export default IssuePageMain;
