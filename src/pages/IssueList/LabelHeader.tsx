import { CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import LabelMilestone from "./LabelMilestone";
import styled from "styled-components";

import NewIssueBtn from "./NewIssueBtn";
import FilterInput from "./FilterInput";

const RepoContentContainer = styled.div`
  margin-top: 24px;
  padding: 0 32px;
  font-size: 14px;
`;
const SubNavBox = styled.div`
  display: flex;
  /* margin-bottom: 24px; */
  width: 100%;

  @media screen and (max-width: 1010px) {
    margin-bottom: 16px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

function LabelHeader() {
  return (
    <RepoContentContainer>
      <SubNavBox>
        <div className="hidden md:block flex-grow">
          <FilterInput />
        </div>
        <div className="justify-between flex md:ml-auto w-full md:w-auto">
          <LabelMilestone />
          <NewIssueBtn />
        </div>
      </SubNavBox>
      <div className="block my-[24px] md:hidden">
        <FilterInput />
      </div>
      <div className=" my-[18px] lg:hidden">
        <a href="#/">
          <IssueOpenedIcon size={16} className="mr-1" />
          <span className="font-semibold">5 Open</span>
        </a>
        <a href="#/" className="ml-2.5">
          <CheckIcon size={16} className="fill-fg-muted mr-1" />
          <span> 1 Closed</span>
        </a>
      </div>
    </RepoContentContainer>
  );
}
export default LabelHeader;
