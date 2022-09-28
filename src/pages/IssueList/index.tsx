import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
import { ListRepoDataArr } from "../../type";
function IssueListMain() {
  const [issueData, setIssueData] = useState<ListRepoDataArr>();
  const fetchData = () => {
    api.listRepositoryIssue().then((res) => {
      console.log(res);
      // setIssueData(res);
    });
  };
  useEffect(fetchData, []);

  return (
    <>
      <IssueList />
    </>
  );
}

export default IssueListMain;
