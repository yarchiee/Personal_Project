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
  margin-top: -4px;
  margin-right: 4px;
  margin-bottom: 4px;
`;
const IssueLabelP = styled.p<PropsTypes>`
  padding: 0 7px;
  font-weight: 500;
  font-size: 10px;
  background-color: ${(props) => `#${props.isChange}`};
  color: ${(props) => props.lightordark};
  /* border: 0.5px solid #e1e2e3; */
  line-height: 20px;
  border-radius: 2em;
  font-weight: 600;
`;

const LabelTag = ({ selectdLabel, selectedLabelColor }) => {
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
export default LabelTag;
