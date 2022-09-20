// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const HeaderBar = styled.header`
  background-color: #24292f;
  height: 64px;
  width: 100%;
`;

function Header() {
  return (
    <>
      <HeaderBar></HeaderBar>
    </>
  );
}

export default Header;
