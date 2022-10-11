import { useState, useEffect } from "react";
import IssuePage from "./IssuePage";
import api from "../../services/api";
function IssuePageMain() {
  const [timeLineEvent, setTimeLineEvent] = useState([]);
  const [perIssueData, setPerIssueData] = useState({});
  const [labelData, setLabelData] = useState([]);
  const [isAssignee, setIsAssignee] = useState([]);
  const [typeIssuelName, setTypeIssueName] = useState("");
  const [leaveComment, setLeaveComment] = useState("");
  const [whoIsAssignee, setWhoIsAssignee] = useState("");
  const [selectdLabel, setSelectedLabel] = useState("");
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState("");
  const [selectedLabelColor, setSelectedLabelColor] = useState("");
  const [check, setCheck] = useState<string[]>([]);
  const newCreateIssue = {
    title: typeIssuelName,
    body: leaveComment,
    assignees: [...whoIsAssignee],
    labels: [...selectdLabel],
    avatarUrl: [...selectedAvatarUrl],
    labelColor: [...selectedLabelColor],
    checkone: [...check],
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
    api.getTimeLineEvent().then((res) => {
      setTimeLineEvent(res);
      console.log(timeLineEvent);
    });
  };
  useEffect(getTimeLineEvent, []);

  const getAnIssue = () => {
    api.getAnIssue().then((res) => {
      setPerIssueData(res);
      console.log(res);
      console.log(perIssueData);
    });
  };
  useEffect(getAnIssue, []);

  return (
    <>
      <IssuePage
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
        typeIssuelName={typeIssuelName}
        setTypeIssueName={setTypeIssueName}
        leaveComment={leaveComment}
        setLeaveComment={setLeaveComment}
        postCreateIssue={postCreateIssue}
      />
    </>
  );
}
export default IssuePageMain;
