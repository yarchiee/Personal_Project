// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import NewIssuePage from "./NewIssuePage";
// import api from "../../services/api";
function NewIssuePageMain() {
  // const [markdown, setMarkdown] = useState("");
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
  };
  const postCreateIssue = async () => {
    await api.createIssue(newCreateIssue);
  };
  const getMarkDown = () => {
    api.markDown().then((res) => {
      // setMarkdown(res.data);
    });
  };
  useEffect(getMarkDown, []);

  const fetchLabelData = () => {
    api.listLabelAll().then((res) => {
      // console.log(res);
      setLabelData(res);
    });
  };
  useEffect(fetchLabelData, []);

  const fetchAssigneeData = () => {
    api.getAssigneeMenber().then((res) => {
      // console.log(res);
      setIsAssignee(res);
    });
  };
  useEffect(fetchAssigneeData, []);
  return (
    <>
      <NewIssuePage
        labelData={labelData}
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

      {/* <div dangerouslySetInnerHTML={{ __html: markdown }} /> */}
    </>
  );
}
export default NewIssuePageMain;
