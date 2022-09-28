import styled from "styled-components";
import ListItem from "./ListItem";
import IssueBox from "./IssueBox";
import Pagination from "./Pagination";
import LabelHeader from "./LabelHeader";

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
// const LabelBoxHeader = styled.div`
//   background-color: #f6f8fa;
//   height: 55px;
//   padding: 16px;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid #d0d7de;
//   border-top-left-radius: 6px;
//   border-top-right-radius: 6px;
// `;
// const LabelBoxTitle = styled.div`
//   color: #24292f;
//   font-weight: 600;
//   line-height: 21px;
// `;
function IssueList() {
  return (
    <>
      <LabelHeader />
      <IssueContainer>
        <IssueBox />
        <ListItem />
        <ListItem />
        <ListItem />
      </IssueContainer>
      <Pagination />
    </>
  );
}

export default IssueList;
