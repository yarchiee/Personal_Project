import { useEffect, useState } from "react";
import EditArea from "./EditArea";

import styled from "styled-components";
type DisplayProps = {
  display: string;
};
const ReviseMenu = styled.div<DisplayProps>`
  display: ${(props) => props.display};

  @media screen and (max-width: 1011.9px) {
    width: 158px;
    margin-top: 2px;
    padding: 0 4px;
    line-height: 1.5;
    position: absolute;
    font-size: 12px;
    top: 75%;
    right: 25%;

    z-index: 100;
  }
`;
const ReviseMenuContainer = styled.div`
  @media screen and (max-width: 1011.9px) {
    width: 158px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #24292f;
    border: 1px solid #d0d7de;
    margin-top: 2px;
    line-height: 1.5;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 20%);
    border-radius: 6px;
    padding-top: 4px;
    padding-bottom: 4px;
    display: block;

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
  }
`;
const ReviseMenuBtn = styled.button<DisplayProps>`
  justify-content: flex-end;
  display: ${(props) => props.display};

  &:hover {
    background-color: #0969da;
    color: #fff;
  }

  @media screen and (max-width: 1011.9px) {
    text-align: start;
    background-color: transparent;
    border: none;
    padding: 4px 8px 4px 16px;

    justify-content: flex-end;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    cursor: pointer;
  }
`;
const DeleteBtn = styled.button`
  justify-content: flex-end;
  display: block;
  width: 100%;

  &:hover {
    background-color: #0969da;
    color: #fff;
  }

  @media screen and (max-width: 1011.9px) {
    text-align: start;
    background-color: transparent;
    border: none;
    padding: 4px 8px 4px 16px;
    cursor: pointer;
  }
`;

const MobileEditDelete = ({
  editModal,
  setEditModal,
  openReviseBtn,
  setOpenReviseBtn,
  toggleEditModal,
}) => {
  //   const [selectedEditBtn, setSelectedEditBtn] = useState(false);
  //   const toggleEdit = () => {
  //     setSelectedEditBtn(!selectedEditBtn);
  //   };
  return (
    <>
      <ReviseMenu display={openReviseBtn ? "none" : "block"}>
        <ReviseMenuContainer>
          <ReviseMenuBtn
            onClick={() => {
              setOpenReviseBtn(true);
              toggleEditModal();
            }}
            display={openReviseBtn ? "none" : "block"}
          >
            Edit
          </ReviseMenuBtn>
          <DeleteBtn>Delete</DeleteBtn>
        </ReviseMenuContainer>
      </ReviseMenu>
    </>
  );
};

export default MobileEditDelete;
