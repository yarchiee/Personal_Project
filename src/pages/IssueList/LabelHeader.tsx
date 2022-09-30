import { XIcon, CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
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

function LabelHeader({ isOpenIssue, labelData, query, setQuery }) {
  return (
    <RepoContentContainer>
      <SubNavBox>
        <div className="hidden md:block flex-grow">
          <FilterInput query={query} setQuery={setQuery} />
        </div>
        <div className="justify-between flex md:ml-auto w-full md:w-auto">
          <LabelMilestone labelData={labelData} />
          <NewIssueBtn />
        </div>
      </SubNavBox>
      <div className="block my-[24px] md:hidden">
        <FilterInput query={query} setQuery={setQuery} />
      </div>
      <div className="text-[14px] decoration-[#57606a] font-medium flex mt-[16px] leading-[18px]">
        <div className=" bg-[#57606a] w-[18px] h-[18px] rounded-[6px] mr-[8px]">
          <XIcon size={18} fill="#ffffff" />
        </div>
        Clear current search query,filters,and sorts
      </div>
      <div className=" my-[18px] lg:hidden">
        <a href="#/">
          <IssueOpenedIcon size={16} className="mr-1" />
          <span className="font-semibold">{isOpenIssue.total_count} Open</span>
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
