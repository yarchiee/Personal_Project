import styled from "styled-components";

const IssueLabelDeleteBtn = styled.button`
  color: #57606a;
  margin-left: 16px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #0969da;
  }
`;

const DeleteBtn = ({ onClick }) => {
  return (
    <>
      <IssueLabelDeleteBtn onClick={onClick}>Delete</IssueLabelDeleteBtn>
    </>
  );
};

export default DeleteBtn;
