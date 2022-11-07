import { useEffect, useState } from "react";
import api from "../../services/api";
import NewIssuePage from "./NewIssuePage";
function NewIssuePageMain() {
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

  const fetchLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchLabelData, []);

  const fetchAssigneeData = () => {
    api.getAssigneeMenber().then((res) => {
      setIsAssignee(res);
    });
  };
  useEffect(fetchAssigneeData, []);
  if (newCreateIssue === undefined) {
    return <></>;
  }
  return (
    <>
      <NewIssuePage
        labelData={labelData}
        setLabelData={setLabelData}
        setIsAssignee={setIsAssignee}
        isAssignee={isAssignee}
        typeIssuelName={typeIssuelName}
        setTypeIssueName={setTypeIssueName}
        leaveComment={leaveComment}
        setLeaveComment={setLeaveComment}
        newCreateIssue={newCreateIssue}
        postCreateIssue={postCreateIssue}
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
      />
    </>
  );
}
export default NewIssuePageMain;
