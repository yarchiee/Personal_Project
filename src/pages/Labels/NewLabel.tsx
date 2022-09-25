import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { KebabHorizontalIcon, SyncIcon } from "@primer/octicons-react";
import { randomBase16 } from "../../utils/random";
// import { SelectContext } from "../../context/SelectContext";
import { CreateLabelData } from "../../type";
import api from "../../services/api";
import LabelTag from "./LabelTag";
import DeleteBtn from "./DeleteBtn";

type PropsTypes = {
  $isShow?: boolean;
  isChange?: string;
  lightordark?: string;
};
const EachLabelContainer = styled.div`
  height: 77px;
  border: 1px solid #d0d7de;
  border-bottom: none;
  /* border-top: none; */
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  line-height: 26px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
  @media screen and (max-width: 768px) {
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
  border-radius: 6px;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  margin-bottom: 16px;
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
const Wrapper = styled.div<PropsTypes>`
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
const NewLabel = ({ onCancel, callback }) => {
  const [createLabelData, setCreateLabelData] = useState<CreateLabelData>(
    [] as unknown as CreateLabelData
  );
  const [selectColorCode, setSelectColorCode] = useState("#c2e0c6");
  const [typeDescription, setTypeDescription] = useState("");
  const [typeLabelName, setTypeLabelName] = useState("Label preview");
  const newCreateData = {
    name: typeLabelName,
    description: typeDescription,
    color: selectColorCode,
  };
  console.log(newCreateData);

  const randomColor = () => {
    const newColor = {
      color: randomBase16(6),
    };
    updateData(newColor);
  };
  const updateData = (obj) => {
    const newData = { ...createLabelData, ...obj };
    setCreateLabelData(newData);
    setSelectColorCode(newData.color);
  };
  // const createLabel = async () => {
  //   const sourceName = newCreateData.name;
  //   const description = newCreateData.description;

  //   const color = newCreateData.color;

  //   await api.createLabel(sourceName, newCreateData);
  //   callback();
  // };
  function lightOrDark(bgcolor) {
    const r = parseInt(bgcolor.slice(1, 3), 16);
    const g = parseInt(bgcolor.slice(3, 5), 16);
    const b = parseInt(bgcolor.slice(5, 7), 16);
    const hsp = r * 0.3 + g * 0.6 + b * 0.1;
    if (hsp > 127.5) {
      return "black";
    } else {
      return "white";
    }
  }
  const alertMessage = () => {
    alert(
      "Are you sure?Delete a label will remove it from all issues and pull requests."
    );
  };
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
            <DeleteBtn onClick={alertMessage} />
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
              // defaultValue="Label name"
              type="text"
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
                isChange={selectColorCode}
                lightordark={lightOrDark(selectColorCode)}
                onClick={() => {
                  randomColor();
                }}
              >
                <SyncIcon size={16} />
              </ColorSelectBtn>

              <EditLabelInput
                maxLength={6}
                pattern="#?([a-fA-F0-9]{6})"
                placeholder="#c2e0c"
                value={selectColorCode}
                id="colorcode"
                name="colorcode"
                onChange={(e) => setSelectColorCode(e.target.value)}
              />
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

export default NewLabel;
