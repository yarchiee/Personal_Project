// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import NewIssuePage from "./NewIssuePage";
// import api from "../../services/api";
function NewIssuePageMain() {
  const [markdown, setMarkdown] = useState("");
  const getMarkDown = () => {
    api.markDown().then((res) => {
      console.log(res);
      setMarkdown(res.data);
    });
  };
  useEffect(getMarkDown, []);
  return (
    <>
      <NewIssuePage />

      {/* <div dangerouslySetInnerHTML={{ __html: markdown }} /> */}
    </>
  );
}
export default NewIssuePageMain;
