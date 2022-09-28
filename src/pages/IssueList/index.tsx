import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
import { ListRepoDataArr } from "../../type";
function IssueListMain() {
  const [data, setData] = useState<ListRepoDataArr>();
  const fetchData = () => {
    api.listRepositoryIssue().then((res) => {
      console.log(res);
      // setData(res);
    });
  };
  useEffect(() => fetchData(), []);
  return (
    <>
      <IssueList />
    </>
  );
}

export default IssueListMain;
