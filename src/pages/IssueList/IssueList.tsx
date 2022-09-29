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

function IssueList({ isOpenIssue, labelData }) {
  return (
    <>
      <LabelHeader isOpenIssue={isOpenIssue} labelData={labelData} />
      <IssueContainer>
        <IssueBox isOpenIssue={isOpenIssue} labelData={labelData} />
        {/* {isOpenIssue.items.map((data) => {
          return (
            <ListItem key={data.id} data={data} isOpenIssue={isOpenIssue} />
          );
        })} */}
      </IssueContainer>
      <Pagination />
    </>
  );
}

export default IssueList;
