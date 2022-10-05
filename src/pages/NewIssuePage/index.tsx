// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import NewIssuePage from "./NewIssuePage";
// import api from "../../services/api";
function NewIssuePageMain() {
  const [markdown, setMarkdown] = useState("");
  const [labelData, setLabelData] = useState([]);
  const [isAssignee, setIsAssignee] = useState([]);

  const getMarkDown = () => {
    api.markDown().then((res) => {
      setMarkdown(res.data);
    });
  };
  useEffect(getMarkDown, []);

  const fetchLabelData = () => {
    api.listLabelAll().then((res) => {
      console.log(res);
      setLabelData(res);
    });
  };
  useEffect(fetchLabelData, []);

  const fetchAssigneeData = () => {
    api.getAssigneeMenber().then((res) => {
      console.log(res);
      setIsAssignee(res);
    });
  };
  useEffect(fetchAssigneeData, []);
  return (
    <>
      <NewIssuePage labelData={labelData} isAssignee={isAssignee} />

      {/* <div dangerouslySetInnerHTML={{ __html: markdown }} /> */}
    </>
  );
}
export default NewIssuePageMain;
