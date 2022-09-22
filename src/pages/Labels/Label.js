import { useEffect, useState } from "react";
import api from "../../utils/api";
import { randomBase16 } from "../../utils/random";

// import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import EditBtn from "./EditBtn";
import NewLabel from "./NewLabel";

import {
  TagIcon,
  MilestoneIcon,
  SearchIcon,
  KebabHorizontalIcon,
} from "@primer/octicons-react";
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
  /* background-color: #0969da; */
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
  /* width: 55px; */
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
    /* margin-left: 24px; */
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
const SelectMenuBtn = styled.summary`
  color: #57606a;
  list-style: none;
  line-height: 21px;
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: -2px;
    content: "";
    border: 4px solid;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  &::-webkit-details-marker {
    display: none;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const SelectMenuBtnDetails = styled.details`
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  background-color: transparent;
  border: 0;
`;
const SortListBox = styled.div`
  width: 300px;
  /* height: 100px; */
  margin-top: 4px;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 12px;
  color: #24292f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(104, 149, 159, 0.2);
  position: absolute !important;
  right: 48px !important;
  top: 295px;
`;
const SortList = styled.div`
  width: 100%;
  height: 35px;
  padding: 8px 8px 8px 30px;
  color: #24292f;

  line-height: 20px;
  border-bottom: 1px solid #d0d7de;
  &:last-child {
    border-bottom: none;
  }
`;
const SortListTitle = styled(SortList)`
  width: 100%;
  height: 33px;
  padding: 8px 10px;
  color: #24292f;
  font-weight: 600;
  line-height: 20px;
`;

const EachLabelContainer = styled.div`
  height: 77px;
  border: 1px solid #d0d7de;
  border-top: none;
  padding: 16px;
  display: flex;
  line-height: 44px;
`;
const EachLabelIconContainer = styled.div`
  display: flex;
  line-height: 44px;
  width: 25%;
`;

const IssueLabel = styled.div`
  height: 28px;
  margin: auto 0;
`;
const IssueLabelP = styled.p`
  padding: 0 10px;
  font-weight: 500;
  font-size: 12px;
  background-color: #d73a4a;
  color: #fff;
  line-height: 28px;
  border-radius: 2em;
  font-weight: 600;
`;
const IssueLabelText = styled.div`
  color: #57606a;
  width: 33.33%;
`;

const IssueLabelEditBtn = styled.button`
  color: #57606a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0969da;
  }
`;
const IssueLabelDeleteBtn = styled.button`
  color: #57606a;
  margin-left: 16px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0969da;
  }
`;
const EditDeleteAreaDesktop = styled.div`
  margin-left: auto;

  @media screen and (max-width: 1011.9px) {
    display: none;
  }
`;
const EditDeleteAreaMobile = styled.div`
  display: none;
  @media screen and (max-width: 1011.9px) {
    display: block;

    margin-left: auto;
  }
`;
const ThreeDotBotton = styled.button`
  width: 42px;
  height: 28px;
  background-color: #f6f8fa;
  border: 1px solid rgba(27, 31, 36, 0.15);
  border-radius: 6px;
  margin-top: 7px;
  &:hover {
    background-color: #0969da;
  }
`;
const ThreeDotIcon = styled(KebabHorizontalIcon)`
  display: none;
  @media screen and (max-width: 1011.9px) {
    display: block;
    &:hover {
      color: #fff;
    }
  }
`;

function Label() {
  const [repoLabelData, setRepoLabelData] = useState([]);
  const [selectedEdit, setSelectedEdit] = useState();

  useEffect(() => {
    api.listLabelAll().then((res) => {
      console.log(res);
      setRepoLabelData(res);
    });
    console.log(randomBase16(6));
  }, []);
  console.log(repoLabelData);

  const cancel = () => {
    setSelectedEdit(undefined);
  };

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
          <NewLabel />
          <LabelBoxHeader>
            <LabelBoxTitle>9 labels</LabelBoxTitle>

            <SelectMenuBtnDetails>
              <SelectMenuBtn>Sort </SelectMenuBtn>
              <SortListBox>
                <SortListTitle>Sort</SortListTitle>
                <SortList>Alphabetically</SortList>
                <SortList>Reverse alphabetically</SortList>
                <SortList>Most issues</SortList>
                <SortList>Fewest issues</SortList>
              </SortListBox>
            </SelectMenuBtnDetails>
          </LabelBoxHeader>
          {repoLabelData.map((data, index) => {
            return (
              <>
                <EachLabelContainer>
                  <EachLabelIconContainer>
                    <IssueLabel>
                      <IssueLabelP>{data.name}</IssueLabelP>
                    </IssueLabel>
                  </EachLabelIconContainer>
                  <IssueLabelText>{data.description}</IssueLabelText>
                  <EditDeleteAreaDesktop>
                    <IssueLabelEditBtn
                      onClick={() => {
                        setSelectedEdit(index);
                      }}
                    >
                      Edit
                    </IssueLabelEditBtn>
                    <IssueLabelDeleteBtn>Delete</IssueLabelDeleteBtn>
                  </EditDeleteAreaDesktop>
                  <EditDeleteAreaMobile>
                    <ThreeDotBotton>
                      <ThreeDotIcon size={16} />
                    </ThreeDotBotton>
                  </EditDeleteAreaMobile>
                </EachLabelContainer>
                {selectedEdit === index && (
                  <EditBtn value={data.name} onCancel={cancel} />
                )}
              </>
            );
          })}
        </LabelBox>
      </RepoContentContainer>
    </>
  );
}

export default Label;
