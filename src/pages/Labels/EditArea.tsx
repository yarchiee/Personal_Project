import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { KebabHorizontalIcon, SyncIcon } from "@primer/octicons-react";
import { randomBase16 } from "../../utils/random";
import { SelectContext } from "../../context/SelectContext";
import LabelTag from "./LabelTag";

// import ColorBoard from "./ColorBoard";

import api from "../../service/api";
type PropsTypes = {
  lightordark?: string;
  isChange?: string;
  isBackgroundColor?: string;
};
const EachLabelContainer = styled.div`
  height: 77px;
  border: 1px solid #d0d7de;
  border-bottom: none;
  border-top: none;
  /* border-bottom: none; */
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  line-height: 26px;
  @media screen and (max-width: 768px) {
    /* height: 340px; */
    flex-direction: column;
  }
`;
const EditLabelContainer = styled(EachLabelContainer)`
  border-top: none;
  height: 93px;
  padding-top: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #d0d7de;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    height: 285px;
  }
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
const IssueLabelP = styled.p<PropsTypes>`
  padding: 0 10px;
  font-weight: 500;
  font-size: 12px;
  background-color: ${(props) => `#${props.isChange}`};
  color: ${(props) => props.lightordark};
  border: 0.5px solid #e1e2e3;

  line-height: 28px;
  border-radius: 2em;
  font-weight: 600;
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
  margin: auto;

  margin-right: 0;

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;
const EditLabelGroup1 = styled(EditLabelGroup)`
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const EditLabelGroup2 = styled(EditLabelGroup)`
  width: 18%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const EditLabelTitle = styled.div`
  margin-bottom: auto;
`;
const EditLabelInput = styled.input`
  background-color: #f6f8fa;
  border: 1px solid rgba(27, 36, 31, 0.15);
  border-radius: 6px;
  padding: 5px 16px;
  line-height: 22px;
  margin-bottom: 16px;
  width: 100%;
  color: #24292f;
  font-size: 14px;
  &:focus {
    outline: none !important;
    border: 3px solid #1d76db;
  }
`;
const CheckoutEdit = styled.div`
  margin-top: auto;
  margin-left: auto;
  display: flex;
`;
const EditLabelCancel = styled.div`
  height: 32px;
  background-color: #f6f8fa;
  border: 1px solid rgba(27, 36, 31, 0.15);

  border-radius: 6px;
  padding: 5px 16px;
  line-height: 22px;
  margin-bottom: 16px;
  margin-left: 8px;
`;
const EditLabelSave = styled(EditLabelCancel)`
  background-color: #2da44e;
  color: #fff;
`;
const ColorFlex = styled.div`
  display: flex;
  position: relative;
`;
const ColorSelectBtn = styled.button<PropsTypes>`
  border: 1px solid rgba(27, 36, 31, 0.15);
  border-radius: 6px;
  padding: 5px 16px;
  line-height: 22px;
  margin-bottom: 16px;
  margin-right: 8px;
  background-color: ${(props) => `${props.isChange}`};
  color: ${(props) => props.lightordark};
`;

const RectangleColorGroup = styled.div`
  position: absolute;
  width: 232px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  left: 55%;
  top: 85%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  &::after {
    top: -10.7px;
    left: 10px;
    right: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #fff;
    content: "";
  }
  &::before {
    top: -12px;
    left: 10px;
    right: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #d0d7de;
    content: "";
  }
`;
const ColorChoose = styled.div`
  width: 100%;
  height: 24px;
  margin: 0 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EachColor = styled.div<PropsTypes>`
  width: 24px;
  height: 24px;
  /* border: 1px solid #000; */
  border-radius: 6px !important;
  cursor: pointer;
  background-color: ${(props) => `#${props.isBackgroundColor}`};
`;
const EachOpacityColor = styled(EachColor)``;
const ChooseColorText = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
  color: #57606a;
  font-weight: 100;
`;
const ColorOpcity = styled(ColorChoose)`
  margin-bottom: 0;
`;
const ButtonColor = {
  darkColors: [
    "B60205",
    "D93F0B",
    "FBCA04",
    "0E8A16",
    "006B75",
    "1D76DB",
    "0052CC",
    "5319E7",
  ],
  lightColors: [
    "E99695",
    "F9D0C4",
    "FEF2C0",
    "C2E0C6",
    "BFDADC",
    "C5DEF5",
    "BFD4F2",
    "D4C5F9",
  ],
};

const EditArea = ({ data, onCancel }) => {
  const selectContext = useContext(SelectContext);
  const [editData, setEditData] = useState(data);
  const [selectColorCode, setSelectColorCode] = useState(`#${editData?.color}`);
  const [typeDescription, setTypeDescription] = useState(editData?.description);
  const [typeLabelName, setTypeLabelName] = useState(editData?.name);
  console.log(selectColorCode);
  const theNewEditData = {
    name: typeLabelName,
    description: typeDescription,
    color: selectColorCode,
  };
  console.log(theNewEditData);
  const randomColor = () => {
    const newColor = {
      color: randomBase16(6),
    };
    updateData(newColor);
  };
  const updateData = (obj) => {
    const newData = { ...editData, ...obj };
    setEditData(newData);
    setSelectColorCode(newData.color);
    if (
      selectContext.selectedEdit &&
      Array.isArray(selectContext.selectedEdit) &&
      typeof selectContext.selectedEdit[1] === "function"
    ) {
      selectContext.selectedEdit[1](newData);
    }
  };

  function lightOrDark(bgcolor) {
    const r = parseInt(bgcolor.slice(0, 2), 16);
    const g = parseInt(bgcolor.slice(2, 4), 16);
    const b = parseInt(bgcolor.slice(4, 6), 16);
    const hsp = r * 0.3 + g * 0.6 + b * 0.1;
    if (hsp > 127.5) {
      return "black";
    } else {
      return "white";
    }
  }

  return (
    <>
      <Wrapper>
        <EachLabelContainer>
          <EachLabelIconContainer>
            <LabelTag
              selectColorCode={selectColorCode}
              typeLabelName={typeLabelName}
              lightordark={lightOrDark}
            />
          </EachLabelIconContainer>
          <EditDeleteAreaDesktop>
            <IssueLabelDeleteBtn>Delete</IssueLabelDeleteBtn>
          </EditDeleteAreaDesktop>
          <EditDeleteAreaMobile>
            <ThreeDotBotton>
              <ThreeDotIcon size={16} />
            </ThreeDotBotton>
          </EditDeleteAreaMobile>
        </EachLabelContainer>
        <EditLabelContainer>
          <EditLabelGroup1>
            <EditLabelTitle>Label name</EditLabelTitle>
            <EditLabelInput
              placeholder="Label name"
              value={typeLabelName}
              id="labelname"
              name="labelname"
              onChange={(e) => setTypeLabelName(e.target.value)}
            />
          </EditLabelGroup1>
          <EditLabelGroup1>
            <EditLabelTitle>Description</EditLabelTitle>
            <EditLabelInput
              // defaultValue={editData?.description}
              placeholder="Description (optional)"
              value={typeDescription}
              id="description"
              name="description"
              onChange={(e) => setTypeDescription(e.target.value)}
            />
          </EditLabelGroup1>
          <EditLabelGroup2>
            <EditLabelTitle>Color</EditLabelTitle>
            <ColorFlex>
              <ColorSelectBtn
                onClick={() => {
                  randomColor();
                }}
                isChange={selectColorCode}
                lightordark={lightOrDark(selectColorCode)}
              >
                <SyncIcon size={16} />
              </ColorSelectBtn>
              <EditLabelInput
                value={selectColorCode}
                id="colorcode"
                name="colorcode"
                onChange={(e) => setSelectColorCode(e.target.value)}
              />
              <RectangleColorGroup>
                <ChooseColorText>Choose from default colors:</ChooseColorText>
                <ColorChoose>
                  {ButtonColor.darkColors.map((item) => (
                    <EachColor isBackgroundColor={item} />
                  ))}
                </ColorChoose>
                <ColorOpcity>
                  {ButtonColor.lightColors.map((item) => (
                    <EachOpacityColor isBackgroundColor={item} />
                  ))}
                </ColorOpcity>
              </RectangleColorGroup>
            </ColorFlex>
          </EditLabelGroup2>
          <CheckoutEdit>
            <EditLabelCancel onClick={onCancel}>Cancel</EditLabelCancel>
            <EditLabelSave>Save changes</EditLabelSave>
          </CheckoutEdit>
        </EditLabelContainer>
      </Wrapper>
    </>
  );
};

export default EditArea;
