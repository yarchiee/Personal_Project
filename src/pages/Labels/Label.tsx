import styled from "styled-components";
import { KebabHorizontalIcon } from "@primer/octicons-react";
import EditArea from "./EditArea";
import DeleteBtn from "./DeleteBtn";
import MobileEditDelete from "./MobileEditDelete";
import lightOrDark from "../../utils/lightCal";
import api from "../../services/api";
import { useState } from "react";

type PropsTypes = {
  $isShow?: boolean;
  isChange?: string;
  lightordark?: string;
};
const EachLabelContainer = styled.div<PropsTypes>`
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

const IssueLabelText = styled.div`
  color: #57606a;
  width: 33.33%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IssueLabelEditBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #57606a;
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
  position: relative;
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
const Label = ({ data, callback }) => {
  const [editModal, setEditModal] = useState(false);
  const [openReviseBtn, setOpenReviseBtn] = useState(true);

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };
  const deleteLabel = async () => {
    const sourceName = data.name;
    await api.deleteLabel(sourceName);
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
                {data.name}
              </IssueLabelP>
            </IssueLabel>
          </EachLabelIconContainer>
          <IssueLabelText>{data.description}</IssueLabelText>
          <EditDeleteAreaDesktop>
            <IssueLabelEditBtn onClick={toggleEditModal}>
              Edit
            </IssueLabelEditBtn>
            <DeleteBtn onClick={popconfirm} />
          </EditDeleteAreaDesktop>
          <EditDeleteAreaMobile>
            <ThreeDotBotton
              onClick={() => {
                setOpenReviseBtn(!openReviseBtn);
              }}
            >
              <ThreeDotIcon size={16} />
            </ThreeDotBotton>
            <MobileEditDelete
              editModal={editModal}
              setEditModal={setEditModal}
              openReviseBtn={openReviseBtn}
              setOpenReviseBtn={setOpenReviseBtn}
              toggleEditModal={toggleEditModal}
            />
          </EditDeleteAreaMobile>
        </EachLabelFlexBox>
      </EachLabelContainer>

      {editModal && (
        <EditArea onCancel={toggleEditModal} data={data} callback={callback} />
      )}
    </>
  );
};

export default Label;
