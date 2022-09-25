import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { KebabHorizontalIcon, SyncIcon } from "@primer/octicons-react";
import { randomBase16 } from "../../utils/random";
import LabelTag from "./LabelTag";
import DeleteBtn from "./DeleteBtn";
import api from "../../services/api";

type PropsTypes = {
  lightordark?: string;
  isChange?: string;
  isBackgroundColor?: string;
  colorBoard?: boolean;
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
  display: inline-block;
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
  @media screen and (max-width: 768px) {
    margin-top: 3px;
    margin-left: 0;
    margin-right: auto;
  }
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
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 8px;
  }
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
  background-color: ${(props) => `#${props.isChange}`};
  color: ${(props) => props.lightordark};
`;

const RectangleColorGroup = styled.div<PropsTypes>`
  position: absolute;
  width: 232px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  left: 30%;
  top: 70%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  display: ${(props) => (props.colorBoard ? "block" : "none")};
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
  @media screen and (max-width: 768px) {
    left: 10%;
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

const EditArea = ({ data, onCancel, callback }) => {
  const [fieldValue, setFieldValue] = useState(false);
  const [editData, setEditData] = useState({
    name: data.name,
    color: data.color,
    description: data.description,
  });
  const handleBlur = () => setFieldValue(false);
  const handleFocus = () => setFieldValue(true);
  console.log(fieldValue);
  const randomColor = () => {
    const newColor = {
      color: randomBase16(6),
    };
    updateData(newColor);
  };
  const updateData = (obj) => {
    const newData = { ...editData, ...obj };
    setEditData(newData);
  };
  const mapPatchData = (oldData, newData) => {
    const patchData = {};
    for (let i in newData) {
      if (oldData[i] !== newData[i]) {
        i !== "name" && (patchData[i] = newData[i]);
        i == "name" && (patchData["new_name"] = newData[i]);
      }
    }
    return patchData;
  };
  const updateLabel = async () => {
    const patchData = mapPatchData(data, editData);
    const sourceName = data.name;
    await api.updateALabel(sourceName, patchData);
    callback();
  };
  const popconfirm = () => {
    const confirm = window.confirm(
      "Are you sure?Delete a label will remove it from all issues and pull requests."
    );
    if (confirm) {
      deleteLabel();
    }
  };
  const deleteLabel = async () => {
    const sourceName = data.name;
    await api.deleteLabel(sourceName);
    callback();
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
              selectColorCode={editData?.color}
              typeLabelName={editData?.name}
              lightordark={lightOrDark}
            />
          </EachLabelIconContainer>
          <EditDeleteAreaDesktop>
            <DeleteBtn onClick={popconfirm} />
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
              value={editData?.name}
              id="labelname"
              name="labelname"
              onChange={(e) => updateData({ name: e.target.value })}
            />
          </EditLabelGroup1>
          <EditLabelGroup1>
            <EditLabelTitle>Description</EditLabelTitle>
            <EditLabelInput
              placeholder="Description (optional)"
              value={editData?.description}
              id="description"
              name="description"
              onChange={(e) => updateData({ description: e.target.value })}
            />
          </EditLabelGroup1>
          <EditLabelGroup2>
            <EditLabelTitle>Color</EditLabelTitle>
            <ColorFlex>
              <ColorSelectBtn
                onClick={() => {
                  randomColor();
                }}
                isChange={editData?.color}
                lightordark={lightOrDark(editData?.color)}
              >
                <SyncIcon size={16} />
              </ColorSelectBtn>
              <EditLabelInput
                maxLength={7}
                pattern="#?([a-fA-F0-9]{6})"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={`#${editData?.color}`}
                id="colorcode"
                name="colorcode"
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    e.target.value = "#";
                    return;
                  }
                  updateData({ color: e.target.value.split("#")[1] });
                }}
              />
              <RectangleColorGroup colorBoard={fieldValue}>
                <ChooseColorText>Choose from default colors:</ChooseColorText>
                <ColorChoose>
                  {ButtonColor.darkColors.map((item) => (
                    <EachColor
                      isBackgroundColor={item}
                      onMouseDown={() => updateData({ color: item })}
                    />
                  ))}
                </ColorChoose>
                <ColorOpcity>
                  {ButtonColor.lightColors.map((item) => (
                    <EachOpacityColor
                      isBackgroundColor={item}
                      onMouseDown={() => updateData({ color: item })}
                    />
                  ))}
                </ColorOpcity>
              </RectangleColorGroup>
            </ColorFlex>
          </EditLabelGroup2>
          <CheckoutEdit>
            <EditLabelCancel onClick={onCancel}>Cancel</EditLabelCancel>
            <EditLabelSave
              onClick={() => {
                updateLabel();
                onCancel();
              }}
            >
              Save changes
            </EditLabelSave>
          </CheckoutEdit>
        </EditLabelContainer>
      </Wrapper>
    </>
  );
};

export default EditArea;
