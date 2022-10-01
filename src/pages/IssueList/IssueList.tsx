import styled from "styled-components";
import ListItem from "./ListItem";
import IssueBox from "./IssueBox";
import Pagination from "./Pagination";
import LabelHeader from "./LabelHeader";
import NoResult from "./NoResult";

const IssueContainer = styled.div`
  padding: 0 32px;
  margin-top: 24px;
  @media screen and (max-width: 1010px) {
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
}) {
  return (
    <>
      <LabelHeader
        isOpenIssue={isOpenIssue}
        labelData={labelData}
        query={query}
        setQuery={setQuery}
      />
      <IssueContainer>
        <IssueBox
          isOpenIssue={isOpenIssue}
          labelData={labelData}
          setIsOpenIssue={setIsOpenIssue}
          setQuery={setQuery}
          query={query}
        />
        {isOpenIssue.map((data) => {
          return (
            <ListItem key={data.id} data={data} isOpenIssue={isOpenIssue} />
          );
        })}
        {/* <NoResult /> */}
      </IssueContainer>
      <Pagination currentpage={currentpage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default IssueList;
