import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

type PropsTypes = {
  $isShow?: boolean;
  isChange?: string;
  lightordark?: string;
};

const IssueLabel = styled.div`
  height: 28px;
  margin: auto 0;
`;
const IssueLabelP = styled.p<PropsTypes>`
  padding: 0 10px;
  font-weight: 500;
  font-size: 12px;
  background-color: ${(props) => `${props.isChange}`};
  /* background-color: #c2e0c6; */
  color: ${(props) => props.lightordark};
  border: 0.5px solid #e1e2e3;
  line-height: 28px;
  border-radius: 2em;
  font-weight: 600;
`;

const LabelTag = ({ selectColorCode, typeLabelName, lightordark }) => {
  console.log(selectColorCode);
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
