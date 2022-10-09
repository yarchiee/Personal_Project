import styled from "styled-components";
import ListItem from "./ListItem";
import IssueBox from "./IssueBox";
import Pagination from "./Pagination";
import LabelHeader from "./LabelHeader";
import NoResult from "./NoResult";
import { useState } from "react";

const IssueContainer = styled.div`
  padding: 0 119.6px;
  margin-top: 24px;

  @media screen and (max-width: 1380px) {
    padding: 0 32px;
    margin-top: 16px;
  }
  @media screen and (max-width: 543px) {
    padding: 0;
    width: 100%;
  }
`;

function IssueList({
  isOpenIssue,
  labelData,
  setIsOpenIssue,
  setQuery,
  query,
  currentpage,
  setCurrentPage,
  clearStatus,
  setClearStatus,
}) {
  const [check, setCheck] = useState<string[]>([]);

  return (
    <>
      <LabelHeader
        isOpenIssue={isOpenIssue}
        labelData={labelData}
        query={query}
        setQuery={setQuery}
        check={check}
        setCheck={setCheck}
        clearStatus={clearStatus}
        setClearStatus={setClearStatus}
      />
      <IssueContainer>
        <IssueBox
          isOpenIssue={isOpenIssue}
          labelData={labelData}
          setIsOpenIssue={setIsOpenIssue}
          setQuery={setQuery}
          query={query}
          check={check}
          setCheck={setCheck}
          clearStatus={clearStatus}
          setClearStatus={setClearStatus}
        />
        {isOpenIssue.map((data) => {
          return (
            <ListItem key={data.id} data={data} isOpenIssue={isOpenIssue} />
          );
        })}
        {isOpenIssue.length === 0 && <NoResult />}
      </IssueContainer>
      <Pagination currentpage={currentpage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default IssueList;
