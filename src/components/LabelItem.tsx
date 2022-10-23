import lightOrDark from "../utils/lightCal";
import styled from "styled-components";

type PropsTypes = {
  $isShow?: boolean;
  isChange?: string;
  lightordark?: string;
};

const IssueLabel = styled.div`
  height: 18px;
  margin: auto 0;
  display: inline-block;
  margin-right: 6px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
const IssueLabelP = styled.p<PropsTypes>`
  padding: 0 10px;
  font-weight: 500;
  font-size: 10px;
  background-color: ${(props) => `#${props.isChange}`};
  color: ${(props) => props.lightordark};
  /* border: 0.5px solid #e1e2e3; */
  line-height: 20px;
  border-radius: 2em;
  font-weight: 600;
`;

const LabelItem = ({ selectdLabel, selectedLabelColor }) => {
  return (
    <>
      <IssueLabel>
        <IssueLabelP
          isChange={selectedLabelColor}
          lightordark={lightOrDark(selectedLabelColor)}
        >
          {selectdLabel}
        </IssueLabelP>
      </IssueLabel>
    </>
  );
};
export default LabelItem;
