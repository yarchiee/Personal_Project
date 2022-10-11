import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
function IssueListMain() {
  const [query, setQuery] = useState(["is:open", "is:issue"]);
  const [clearStatus, setClearStatus] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [isOpenIssue, setIsOpenIssue] = useState([]);
  const [test, setTest] = useState([]);
  const [test2, setTest2] = useState([]);
  const [test3, setTest3] = useState([]);

  const fetchAllIssue = () => {
    api.githubSeach(query.join("+"), currentpage).then((res) => {
      setIsOpenIssue(res.items);
    });
  };
  // console.log(isOpenIssue);

  useEffect(fetchAllIssue, [query, currentpage]);
  const [labelData, setLabelData] = useState([]);
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);
  const testfn = () => {
    api.getTimeLineEvent().then((res) => {
      setTest(res);
    });
  };
  useEffect(testfn, []);
  console.log(test);
  const testfn2 = () => {
    api.getIssueCommentsPer().then((res) => {
      // setTest2(res);
    });
  };
  useEffect(testfn2, []);
  // console.log(test);
  // console.log(test2);
  useEffect(testfn, []);
  // console.log(test);
  const testfn3 = () => {
    api.getAnIssue().then((res) => {
      //setTest3(res);
      console.log(res);
    });
  };
  useEffect(testfn3, []);

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
