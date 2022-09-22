import styled from "styled-components";

const SelectMenuBtn = styled.summary`
  color: #57606a;
  list-style: none;
  line-height: 21px;
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: -2px;
    content: "";
    border: 4px solid;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  &::-webkit-details-marker {
    display: none;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const SelectMenuBtnDetails = styled.details`
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  background-color: transparent;
  border: 0;
`;
const SortListBox = styled.div`
  width: 300px;
  /* height: 100px; */
  margin-top: 4px;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 12px;
  color: #24292f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(104, 149, 159, 0.2);
  position: absolute !important;
  right: 48px !important;
  top: 295px;
`;
const SortList = styled.div`
  width: 100%;
  height: 35px;
  padding: 8px 8px 8px 30px;
  color: #24292f;

  line-height: 20px;
  border-bottom: 1px solid #d0d7de;
  &:last-child {
    border-bottom: none;
  }
`;
const SortListTitle = styled(SortList)`
  width: 100%;
  height: 33px;
  padding: 8px 10px;
  color: #24292f;
  font-weight: 600;
  line-height: 20px;
`;
const SelectMenuArea = () => {
  return (
    <>
      <SelectMenuBtnDetails>
        <SelectMenuBtn>Sort </SelectMenuBtn>
        <SortListBox>
          <SortListTitle>Sort</SortListTitle>
          <SortList>Alphabetically</SortList>
          <SortList>Reverse alphabetically</SortList>
          <SortList>Most issues</SortList>
          <SortList>Fewest issues</SortList>
        </SortListBox>
      </SelectMenuBtnDetails>
    </>
  );
};

export default SelectMenuArea;
