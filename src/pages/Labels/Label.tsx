import styled from "styled-components";
import { KebabHorizontalIcon } from "@primer/octicons-react";
import EditArea from "./EditArea";
import { useEffect, useState } from "react";

const EachLabelContainer = styled.div`
  /* height: 77px; */
  border: 1px solid #d0d7de;
  border-top: none;
  padding: 16px;
  display: flex;
  line-height: 44px;
  display: ${(props) => (props.$isShow ? "none" : "block")};
`;
const EachLabelFlexBox = styled.div`
  display: flex;
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
  background-color: ${(props) => `#${props.isChange}`};
  color: ${(props) => props.lightordark};
  border: 0.5px solid #e1e2e3;
  line-height: 28px;
  border-radius: 2em;
  font-weight: 600;
`;

const IssueLabelText = styled.div`
  color: #57606a;
  width: 33.33%;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
    margin: auto;
    margin-right: 0;
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
const Label = ({ data }) => {
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = () => {
    setEditModal(!editModal);
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
  // console.log(data.name);
  return (
    <>
      <EachLabelContainer $isShow={editModal}>
        <EachLabelFlexBox>
          <EachLabelIconContainer>
            <IssueLabel>
              <IssueLabelP
                isChange={data.color}
                lightordark={lightOrDark(data.color)}
              >
                {data.name}{" "}
              </IssueLabelP>
            </IssueLabel>
          </EachLabelIconContainer>
          <IssueLabelText>{data.description}</IssueLabelText>
          <EditDeleteAreaDesktop>
            <IssueLabelEditBtn onClick={toggleEditModal}>
              Edit
            </IssueLabelEditBtn>
            <IssueLabelDeleteBtn>Delete</IssueLabelDeleteBtn>
          </EditDeleteAreaDesktop>
          <EditDeleteAreaMobile>
            <ThreeDotBotton>
              <ThreeDotIcon size={16} />
            </ThreeDotBotton>
          </EditDeleteAreaMobile>
        </EachLabelFlexBox>
      </EachLabelContainer>

      {editModal && <EditArea onCancel={toggleEditModal} data={data} />}
    </>
  );
};

export default Label;
