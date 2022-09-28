import LabelMilestone from "./LabelMilestone";
import styled from "styled-components";
import ListItem from "./ListItem";
import IssueBox from "./IssueBox";
import Pagination from "./Pagination";
import NewIssueBtn from "./NewIssueBtn";
import FilterInput from "./FilterInput";

const RepoContentContainer = styled.div`
  margin-top: 24px;
  padding: 0 32px;
  font-size: 14px;
`;
const SubNavBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
// const SearchAllLabelsMobile = styled.div`
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;
//     width: 320px;
//     height: 32px;
//     padding: 5px 12px 5px;
//     border: 1px solid #d8dee4;
//     border-radius: 6px;
//     align-items: center;
//     background-color: #f6f8fa;
//     margin-top: 16px;
//     margin-bottom: 16px;
//   }
// `;
// const SearchLabelsInput = styled.input`
//   background: transparent;
//   color: #57606a;
//   border: none;
//   height: 100%;
//   outline: none;
//   margin-left: 10px;
// `;

// const NewLabelBtn = styled.div`
//   background-color: #2da44e;
//   height: 32px;
//   align-items: center;
//   padding: 5px 16px;
//   border: 1px solid #d8dee4;
//   border-radius: 6px;
//   color: #24292f;
//   margin-left: auto;
// `;
// const NewLabelBtnText = styled.div`
//   font-weight: 600;
//   height: 23px;
//   line-height: 23px;
//   margin-left: 5px;
//   color: #fff;
// `;
const LabelBox = styled.div`
  padding: 0 32px;

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
      <RepoContentContainer>
        <SubNavBox>
          <FilterInput />
          <LabelMilestone />
          <NewIssueBtn />
        </SubNavBox>
      </RepoContentContainer>
      <LabelBox>
        <IssueBox />
        <ListItem />
      </LabelBox>
      <Pagination />
    </>
  );
}

export default IssueList;
