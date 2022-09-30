import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
function IssueListMain() {
  const [query, setQuery] = useState(["is:open", "is:issue"]);
  const [isOpenIssue, setIsOpenIssue] = useState([]);
  const fetchAllIssue = () => {
    api.githubSeach(query.join("+")).then((res) => {
      console.log(res.items);
      setIsOpenIssue(res.items);
    });
  };
  useEffect(fetchAllIssue, [query]);
  const [labelData, setLabelData] = useState([]);
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);
  const calaculateTime = () => {
    let date1 = new Date(); //開始時間
    // console.log(date1);
  };
  calaculateTime();
  return (
    <>
      <IssueList
        isOpenIssue={isOpenIssue}
        labelData={labelData}
        setIsOpenIssue={setIsOpenIssue}
        setQuery={setQuery}
        query={query}
      />
    </>
  );
}
export default IssueListMain;
