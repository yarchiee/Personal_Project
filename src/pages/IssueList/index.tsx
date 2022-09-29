import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
// import { ListRepoDataArr } from "../../type";
function IssueListMain() {
  // const [issueData, setIssueData] = useState([]);
  // const fetchData = () => {
  //   api.listRepositoryIssue().then((res) => {
  //     setIssueData(res);
  //   });
  // };
  // useEffect(fetchData, []);
  const [isOpenIssue, setIsOpenIssue] = useState([]);
  const fetchIsOpenIssue = () => {
    api.getOpenIssue().then((res) => {
      console.log(res);
      setIsOpenIssue(res);
    });
  };
  useEffect(fetchIsOpenIssue, []);
  const [labelData, setLabelData] = useState([]);
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      console.log(res);
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);
  return (
    <>
      <IssueList isOpenIssue={isOpenIssue} labelData={labelData} />
    </>
  );
}
export default IssueListMain;
