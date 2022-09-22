import styled from "styled-components";
import { SyncIcon } from "@primer/octicons-react";
const EachLabelContainer = styled.div`
  height: 77px;
  border: 1px solid #d0d7de;
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  padding: 16px;
  padding-bottom: 0;
  display: flex;
  line-height: 26px;
`;
const EditLabelContainer = styled(EachLabelContainer)`
  border: 1px solid #d0d7de;
  border-top: none;
  border-bottom: 1px solid #d0d7de;
  height: 93px;
  padding-top: 0;
  padding-bottom: 16px;
  font-weight: 600;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const EditLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
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
const ColorSelectBtn = styled.button`
  background-color: #f6f8fa;
  border: 1px solid rgba(27, 36, 31, 0.15);
  border-radius: 6px;
  padding: 5px 16px;
  line-height: 22px;
  margin-bottom: 16px;
  margin-right: 8px;
`;
const NewLabel = ({ onClick }) => {
  return (
    <>
      <Wrapper>
        <EachLabelContainer onClick={() => onClick && onClick()}>
          <EachLabelIconContainer>
            <IssueLabel>
              <IssueLabelP>labelpreview </IssueLabelP>
            </IssueLabel>
          </EachLabelIconContainer>
        </EachLabelContainer>
        <EditLabelContainer>
          <EditLabelGroup>
            <EditLabelTitle>Label name</EditLabelTitle>
            <EditLabelInput />
          </EditLabelGroup>
          <EditLabelGroup>
            <EditLabelTitle>Description</EditLabelTitle>
            <EditLabelInput />
          </EditLabelGroup>
          <EditLabelGroup>
            <EditLabelTitle>Color</EditLabelTitle>
            <ColorFlex>
              <ColorSelectBtn>
                <SyncIcon size={16} />
              </ColorSelectBtn>
              <EditLabelInput />
            </ColorFlex>
          </EditLabelGroup>
          <CheckoutEdit>
            <EditLabelCancel>Cancel</EditLabelCancel>
            <EditLabelSave>Create label</EditLabelSave>
          </CheckoutEdit>
        </EditLabelContainer>
      </Wrapper>
    </>
  );
};

export default NewLabel;
