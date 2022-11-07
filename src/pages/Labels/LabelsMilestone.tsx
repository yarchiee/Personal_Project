import styled from "styled-components";
import { TagIcon, MilestoneIcon } from "@primer/octicons-react";

const SelectNavItemChoose = styled.div`
  background-color: #0969da;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  color: #fff;
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
`;
const SelectNavItemText = styled.div`
  height: 23px;
  line-height: 23px;
  margin-left: 5px;
`;
const FlexBox = styled.div`
  display: flex;
`;
const LabelsMilestone = () => {
  return (
    <>
      <FlexBox>
        <SelectNavItemChoose>
          <TagIcon size={16} fill="#fff" />
          <SelectNavItemText>Labels</SelectNavItemText>
        </SelectNavItemChoose>
        <SelectNavItemNormal>
          <MilestoneIcon size={16} fill="#24292f" />
          <SelectNavItemText>Milestones</SelectNavItemText>
        </SelectNavItemNormal>
      </FlexBox>
    </>
  );
};

export default LabelsMilestone;
