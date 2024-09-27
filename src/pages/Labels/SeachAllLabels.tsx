import styled from "styled-components";
import { SearchIcon } from "@primer/octicons-react";

const SearchAllLabelsDesktop = styled.div`
  width: 320px;
  height: 32px;
  padding: 5px 12px 5px;
  border: 1px solid #d8dee4;
  margin-left: 24px;
  border-radius: 6px;
  align-items: center;
  background-color: #f6f8fa;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SearchLabelsInput = styled.input`
  background: transparent;
  color: #57606a;
  border: none;
  height: 100%;
  outline: none;
  margin-left: 10px;
`;
const SearchAllLabels = () => {
  return (
    <>
      <SearchAllLabelsDesktop>
        <SearchIcon size={16} fill="#57606a" />
        <SearchLabelsInput placeholder="Search all labels"></SearchLabelsInput>
      </SearchAllLabelsDesktop>
    </>
  );
};

export default SearchAllLabels;
