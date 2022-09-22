import styled from "styled-components";
import { KebabHorizontalIcon } from "@primer/octicons-react";
import EditArea from "./EditArea";
import { useContext } from "react";
import { SelectContext } from "../../utils/SelectContext";

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
const LabelList = ({ data, index }) => {
  const [selectedEdit, setSelectedEdit] =
    useContext(SelectContext).selectedEdit;
  const cancel = () => {
    setSelectedEdit(null);
  };
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
              console.log(index);
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
        <EditArea labelTagName={data.name} onCancel={cancel} data={undefined} />
      )}
    </>
  );
};

export default LabelList;
