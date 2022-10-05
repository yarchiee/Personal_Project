import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
function IssueListMain() {
  const [query, setQuery] = useState(["is:open", "is:issue"]);
  const [clearStatus, setClearStatus] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [isOpenIssue, setIsOpenIssue] = useState([]);
  const fetchAllIssue = () => {
    api.githubSeach(query.join("+"), currentpage).then((res) => {
      setIsOpenIssue(res.items);
    });
  };
  useEffect(fetchAllIssue, [query, currentpage]);
  const [labelData, setLabelData] = useState([]);
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);

  return (
    <>
      <IssueList
        isOpenIssue={isOpenIssue}
        labelData={labelData}
        setIsOpenIssue={setIsOpenIssue}
        setQuery={setQuery}
        query={query}
        currentpage={currentpage}
        setCurrentPage={setCurrentPage}
        clearStatus={clearStatus}
        setClearStatus={setClearStatus}
      />
    </>
  );
}
export default IssueListMain;
