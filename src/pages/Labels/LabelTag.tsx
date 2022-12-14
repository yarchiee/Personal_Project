import lightOrDark from "../../utils/lightCal";
import styled from "styled-components";

type PropsTypes = {
  $isShow?: boolean;
  isChange?: string;
  lightordark?: string;
};

const IssueLabel = styled.div`
  height: 28px;
  margin: auto 0;
  display: inline-block;
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

const LabelTag = ({ selectColorCode, typeLabelName, lightordark }) => {
  return (
    <>
      <IssueLabel>
        <IssueLabelP
          isChange={selectColorCode}
          lightordark={lightOrDark(selectColorCode)}
        >
          {typeLabelName}
        </IssueLabelP>
      </IssueLabel>
    </>
  );
};
export default LabelTag;
