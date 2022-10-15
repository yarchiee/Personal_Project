import { XIcon, CheckIcon, IssueOpenedIcon } from "@primer/octicons-react";
import { useNavigate } from "react-router-dom";
import LabelMilestone from "./LabelMilestone";
import styled from "styled-components";
import NewIssueBtn from "./NewIssueBtn";
import FilterInput from "./FilterInput";

const RepoContentContainer = styled.div`
  margin-top: 24px;
  padding: 0 119.6px;
  font-size: 14px;
  @media screen and (max-width: 1380px) {
    padding: 0 32px;
  }
`;
const SubNavBox = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1010px) {
    margin-bottom: 16px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

function LabelHeader({
  isOpenIssue,
  labelData,
  query,
  setQuery,
  check,
  setCheck,
  clearStatus,
  setClearStatus,
}) {
  const labelHeaderList = ["is:open", "is:closed"];
  const navigate = useNavigate();

  return (
    <RepoContentContainer>
      <SubNavBox>
        <div className="hidden md:block flex-grow">
          <FilterInput
            query={query}
            setQuery={setQuery}
            clearStatus={clearStatus}
            setClearStatus={setClearStatus}
          />
        </div>
        <div className="justify-between flex md:ml-auto w-full md:w-auto">
          <LabelMilestone labelData={labelData} />
          <NewIssueBtn onClick={() => navigate("new")} />
        </div>
      </SubNavBox>
      <div className="block my-[24px] md:hidden">
        <FilterInput
          query={query}
          setQuery={setQuery}
          clearStatus={clearStatus}
          setClearStatus={setClearStatus}
        />
      </div>
      {clearStatus === true && (
        <div
          className="group text-[14px] decoration-[#57606a] font-medium flex mt-[16px] leading-[18px] "
          onClick={() => {
            setQuery(["is:open", "is:issue"]);
            setCheck([]);
            setClearStatus(false);
          }}
        >
          <div className=" bg-[#57606a] w-[18px] h-[18px] rounded-[6px] mr-[8px] group-hover:bg-[#0969da]">
            <XIcon size={18} fill="#ffffff" />
          </div>
          <span className="group-hover:text-[#0969da]">
            Clear current search query,filters,and sorts
          </span>
        </div>
      )}

      <div className=" my-[18px] lg:hidden">
        <a href="#/">
          <IssueOpenedIcon size={16} className="mr-1" />
          <span
            onClick={() => {
              let tmp = [...query];
              tmp.forEach((element) => {
                if (element.includes("close")) {
                  tmp = tmp.filter((item) => item !== element);
                }
              });
              setQuery([...tmp, labelHeaderList[0]]);
              setClearStatus(true);
            }}
            className="font-semibold"
          >
            Open
          </span>
        </a>
        <a href="#/" className="ml-2.5">
          <CheckIcon size={16} className="fill-fg-muted mr-1" />
          <span
            onClick={() => {
              let tmp = [...query];
              tmp.forEach((element) => {
                if (element.includes("open")) {
                  tmp = tmp.filter((item) => item !== element);
                }
              });

              setQuery([...tmp, labelHeaderList[1]]);
              setClearStatus(true);
            }}
          >
            Closed
          </span>
        </a>
      </div>
    </RepoContentContainer>
  );
}
export default LabelHeader;
