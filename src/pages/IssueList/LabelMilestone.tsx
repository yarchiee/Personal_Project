import styled from "styled-components";
import { TagIcon, MilestoneIcon } from "@primer/octicons-react";

const SelectNavItemChoose = styled.div`
  /* background-color: #0969da; */
  height: 32px;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  /* color: #fff; */
  color: #24292f;
  border: 1px solid #d8dee4;
  border-right: none;
  font-weight: 600;
  margin-left: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
const SelectNavItemNormal = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border: 1px solid #d8dee4;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  color: #24292f;
  font-weight: 600;
  cursor: pointer;
`;
const SelectNavItemText = styled.div`
  height: 23px;
  line-height: 23px;
  margin-left: 5px;
`;
const FlexBox = styled.div`
  display: flex;
`;
const LabelsMilestone = ({ labelData }) => {
  return (
    <>
      <FlexBox>
        <SelectNavItemChoose>
          <TagIcon size={16} fill="#24292f" />
          <SelectNavItemText>Labels</SelectNavItemText>
          <span className="px-1.5 bg-neutral-muted border border-solid border-counter-border rounded-[2em] text-xs font-medium ml-[5px]	leading-18px text-primary-text text-center hidden md:block">
            {labelData.length}
          </span>
        </SelectNavItemChoose>
        <SelectNavItemNormal>
          <MilestoneIcon size={16} fill="#24292f" />
          <SelectNavItemText>Milestones</SelectNavItemText>
          <span className="px-1.5 bg-neutral-muted border border-solid border-counter-border rounded-[2em] text-xs font-medium ml-[5px]	leading-18px text-primary-text text-center hidden md:block">
            0
          </span>
        </SelectNavItemNormal>
      </FlexBox>
    </>
  );
};

export default LabelsMilestone;
