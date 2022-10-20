import styled from "styled-components";
type DisplayProps = {
  display: string;
};
const ReviseMenu = styled.div`
  width: 185px;
  margin-top: 2px;
  padding: 0 4px;
  line-height: 1.5;
  position: absolute;
  font-size: 14px;
  top: 30%;
  right: 0.8%;

  z-index: 100;
`;
const ReviseMenuContainer = styled.div`
  width: 185px;
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
`;
const ReviseMenuBtn = styled.button`
  justify-content: flex-end;
  height: 32px;
  &:hover {
    background-color: #0969da;
    color: #fff;
  }

  text-align: start;
  background-color: transparent;
  border: none;
  padding: 4px 8px 4px 16px;

  justify-content: flex-end;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
const DeleteBtn = styled.button`
  justify-content: flex-end;
  display: block;
  color: #cf222e;
  width: 100%;

  &:hover {
    background-color: #cf222e;
    color: #fff;
  }

  text-align: start;
  background-color: transparent;
  border: none;
  padding: 4px 8px 4px 16px;
  cursor: pointer;
`;
const PopOver = ({ toggleEditModal, type, handleDelete }) => {
  return (
    <>
      <ReviseMenu>
        <ReviseMenuContainer>
          <ReviseMenuBtn>Copy link</ReviseMenuBtn>
          <ReviseMenuBtn>Quote reply</ReviseMenuBtn>
          {type === "comments" && (
            <ReviseMenuBtn>Reference in new issue</ReviseMenuBtn>
          )}
          <div className="w-full border border-solid border-[#d0d7de] border-r-0 border-t-0 border-l-0 mt-[8px] mb-[8px]"></div>
          <ReviseMenuBtn onClick={toggleEditModal}>Edit</ReviseMenuBtn>
          {type === "comments" && (
            <ReviseMenuBtn onClick={handleDelete}>Hide</ReviseMenuBtn>
          )}
          {type === "comments" && (
            <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
          )}
          <div className="w-full border border-solid border-[#d0d7de] border-r-0 border-t-0 border-l-0 mt-[8px] mb-[8px]"></div>
          <ReviseMenuBtn onClick={toggleEditModal}>Repo Content</ReviseMenuBtn>
        </ReviseMenuContainer>
      </ReviseMenu>
    </>
  );
};

export default PopOver;
