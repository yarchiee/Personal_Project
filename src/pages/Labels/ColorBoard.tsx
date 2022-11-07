import styled from "styled-components";
const Triangle = styled.div`
  position: absolute;
  &::after {
    top: -10.7px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #fff;
    content: "";
  }
  &::before {
    top: -12px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #d0d7de;
    content: "";
  }
`;
const Rectangle = styled.div`
  position: absolute;

  width: 232px;
  height: 96px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border: 1px solid #d0d7de;
  border-radius: 6px;
`;

const ColorBoard = () => {
  return (
    <>
      <Triangle></Triangle>
      <Rectangle></Rectangle>
    </>
  );
};

export default ColorBoard;
