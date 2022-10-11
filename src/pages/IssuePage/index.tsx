import { useState, useEffect } from "react";
import IssuePage from "./IssuePage";
import api from "../../services/api";
function IssuePageMain() {
  const [timeLineEvent, setTimeLineEvent] = useState([]);
  const [perIssueData, setPerIssueData] = useState({});
  const [labelData, setLabelData] = useState([]);
  const fetchGetLabelData = () => {
    api.listLabelAll().then((res) => {
      setLabelData(res);
    });
  };
  useEffect(fetchGetLabelData, []);
  const getTimeLineEvent = () => {
    api.getTimeLineEvent().then((res) => {
      setTimeLineEvent(res);
      console.log(timeLineEvent);
    });
  };
  useEffect(getTimeLineEvent, []);

  const getAnIssue = () => {
    api.getAnIssue().then((res) => {
      setPerIssueData(res);
      console.log(res);
      console.log(perIssueData);
    });
  };
  useEffect(getAnIssue, []);

  return (
    <>
      <IssuePage />
    </>
  );
}
export default IssuePageMain;
