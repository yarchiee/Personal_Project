import { useState, useEffect } from "react";
import IssueList from "./IssueList";
import api from "../../services/api";
function IssueListMain() {
  const [query, setQuery] = useState(["is:open", "is:issue"]);
  const [currentpage, setCurrentPage] = useState(1);
  const [isOpenIssue, setIsOpenIssue] = useState([]);
  const fetchAllIssue = () => {
    api.githubSeach(query.join("+"), currentpage).then((res) => {
      // console.log(res.items);
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
  //  function calaculateTime(time) {
  //     const createdTime = Date.parse(time);
  //     const remainTime = now - createdTime;
  //     const convertDay = 24 * 3600 * 1000;
  //     const convertHour = 3600 * 1000;
  //     const convertMins = 60 * 1000;
  //     const days = Math.round(remainTime / convertDay);
  //     const hours = Math.round((days % convertDay) / convertHour);
  //     const minutes = Math.floor(
  //       ((days % convertDay) % convertHour) / convertMins
  //     );
  //     const seconds = Math.round(
  //       (((days % convertDay) % convertHour) % convertMins) / 1000
  //     );
  //     return seconds > 0
  //       ? ${seconds} seconds: minutes > 0
  //       ? ${minutes} minutes: hours > 0
  //       ? ${hours} hours: days > 0
  //       ? ${days} days: null;
  //   }
  //   calaculateTime(time);

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
      />
    </>
  );
}
export default IssueListMain;
