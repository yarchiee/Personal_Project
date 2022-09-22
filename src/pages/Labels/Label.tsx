import { useEffect, useContext } from "react";
import api from "../../utils/api";
import { randomBase16 } from "../../utils/random";
import styled from "styled-components";
import { SelectContext } from "../../utils/SelectContext";

import LabelList from "./LabelList";

import SelectMenuArea from "./Sort";
import { TagIcon, MilestoneIcon, SearchIcon } from "@primer/octicons-react";

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
const SearchAllLabelsDesktop = styled.div`
  width: 320px;
  height: 32px;
  padding: 5px 12px 5px;
  border: 1px solid #d8dee4;
  margin-left: 24px;
  border-radius: 6px;
  align-items: center;
  background-color: #f6f8fa;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SearchAllLabelsMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 320px;
    height: 32px;
    padding: 5px 12px 5px;
    border: 1px solid #d8dee4;
    border-radius: 6px;
    align-items: center;
    background-color: #f6f8fa;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
const SearchLabelsInput = styled.input`
  background: transparent;
  color: #57606a;
  border: none;
  height: 100%;
  outline: none;
  margin-left: 10px;
`;

const NewLabelBtn = styled.button`
  background-color: #2da44e;
  height: 32px;
  align-items: center;
  padding: 5px 16px;
  border: 1px solid #d8dee4;
  border-radius: 6px;
  color: #24292f;
  margin-left: auto;
`;
const NewLabelBtnText = styled.div`
  height: 23px;
  line-height: 23px;
  margin-left: 5px;
  color: #fff;
`;
const LabelBox = styled.div`
  width: 100%;
`;
const LabelBoxHeader = styled.div`
  background-color: #f6f8fa;
  height: 55px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d0d7de;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const LabelBoxTitle = styled.div`
  color: #24292f;
  font-weight: 600;
  line-height: 21px;
`;

function Label() {
  const [RepoLabelArr, setRepoLabelArr] =
    useContext(SelectContext).RepoLabelArr;
  console.log("test", RepoLabelArr);

  useEffect(() => {
    api.listLabelAll().then((res) => {
      console.log(res);
      setRepoLabelArr(res);
    });
    console.log(randomBase16(6));
  }, []);

  return (
    <>
      <RepoContentContainer>
        <SubNavBox>
          <SelectNavItemChoose>
            <TagIcon size={16} fill="#fff" />
            <SelectNavItemText>Labels</SelectNavItemText>
          </SelectNavItemChoose>
          <SelectNavItemNormal>
            <MilestoneIcon size={16} fill="#24292f" />
            <SelectNavItemText>Milestones</SelectNavItemText>
          </SelectNavItemNormal>
          <SearchAllLabelsDesktop>
            <SearchIcon size={16} fill="#57606a" />
            <SearchLabelsInput placeholder="Search all labels"></SearchLabelsInput>
          </SearchAllLabelsDesktop>
          <NewLabelBtn>
            <NewLabelBtnText>New label</NewLabelBtnText>
          </NewLabelBtn>
        </SubNavBox>
        <SearchAllLabelsMobile>
          <SearchIcon size={16} fill="#57606a" />
          <SearchLabelsInput placeholder="Search all labels"></SearchLabelsInput>
        </SearchAllLabelsMobile>
        <LabelBox>
          <LabelBoxHeader>
            <LabelBoxTitle>9 labels</LabelBoxTitle>

            <SelectMenuArea />
          </LabelBoxHeader>
          {RepoLabelArr.map((data, index) => {
            return <LabelList data={data} index={index} />;
          })}
        </LabelBox>
      </RepoContentContainer>
    </>
  );
}

export default Label;
