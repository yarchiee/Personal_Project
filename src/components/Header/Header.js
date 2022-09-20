// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";

const HeaderBar = styled.header`
  background-color: #24292f;
  height: 62px;
  width: 100%;
  padding: 16px 32px;
  display: flex;
`;

const HeaderItem = styled.div`
  display: flex;
  margin-left: 16px;
  line-height: 30px;
`;
const HeaderSearch = styled.div`
  color: rgb(255, 255, 255, 0.7);
  width: 272px;
  height: 30px;
  font-size: 14px;
  border: 1px solid #57606a;
  border-radius: 6px;
`;
const HeaderSearchInput = styled.input`
  background: transparent;
  border: none;
  line-height: 30px;
  padding: 0 12px;
`;
const CategoryLinks = styled.div``;
const CategoryLink = styled.a`
  font-size: 14px;
  color: #fff;
  margin-left: 16px;
  font-weight: 600;
`;
const HeaderToolArea = styled.div`
  /* width: 100%; */
  margin-left: auto;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
`;
const SignOut = styled.div`
  line-height: 30px;
  font-weight: 400;
  color: #fff;
  /* background-color: #fff; */
  /* margin-left: auto; */
  margin-right: 16px;
`;
const ProfileImg = styled.div`
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;
const RepoContainerHeader = styled.div`
  background-color: #f6f8fa;
  height: 112px;
  width: 100%;
  font-size: 14px;
  border: #d8dee4;
`;

const categories = [
  {
    name: "request",
    displayText: "Pull requests",
  },
  {
    name: "issues",
    displayText: "Issues",
  },
  {
    name: "marketplace",
    displayText: "Marketplace",
  },
  {
    name: "explore",
    displayText: "Explore",
  },
];

function Header() {
  return (
    <>
      <HeaderBar>
        <MarkGithubIcon size={32} fill="#fff" />
        <HeaderItem>
          <HeaderSearch>
            <HeaderSearchInput placeholder="Search or jump to..."></HeaderSearchInput>
          </HeaderSearch>
          <CategoryLinks>
            {categories.map(({ displayText }) => (
              <CategoryLink>{displayText}</CategoryLink>
            ))}
          </CategoryLinks>
        </HeaderItem>
        <HeaderToolArea>
          <SignOut>Sign Out</SignOut>
          <ProfileImg />
        </HeaderToolArea>
      </HeaderBar>
      <RepoContainerHeader></RepoContainerHeader>
    </>
  );
}

export default Header;
