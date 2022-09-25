import styled from "styled-components";

import { MarkGithubIcon, ThreeBarsIcon } from "@primer/octicons-react";

const HeaderBar = styled.header`
  background-color: #24292f;
  height: 62px;
  width: 100%;
  padding: 16px 32px;
  display: flex;
`;
const ThreeBarsIconControl = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin: auto 0;
  }
`;
const MarkGithubIconControl = styled.div`
  /* display: none; */
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 48%;
  }
`;
const HeaderItem = styled.div`
  display: flex;
  margin-left: 16px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const HeaderSearch = styled.div`
  color: rgb(255, 255, 255, 0.7);
  width: 272px;
  height: 30px;
  font-size: 14px;
  border: 1px solid #57606a;
  border-radius: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const HeaderSearchInput = styled.input`
  background: transparent;
  border: none;
  line-height: 30px;
  padding: 0 12px;
  /* color: #ffffffb3; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CategoryLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CategoryLink1 = styled.a`
  font-size: 14px;
  color: #fff;
  margin-left: 16px;
  font-weight: 600;
  @media screen and (max-width: 1011.9px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CategoryLink2 = styled.a`
  @media screen and (max-width: 1011.9px) {
    font-size: 14px;
    color: #fff;
    margin-left: 16px;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ProfileImg = styled.div`
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;

const categories1 = [
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
const categories2 = [
  {
    name: "request",
    displayText: "Pulls",
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
        <ThreeBarsIconControl>
          <ThreeBarsIcon size={24} fill="#fff" />
        </ThreeBarsIconControl>
        <MarkGithubIconControl>
          <MarkGithubIcon size={32} fill="#fff" />
        </MarkGithubIconControl>
        <HeaderItem>
          <HeaderSearch>
            <HeaderSearchInput placeholder="Search or jump to..."></HeaderSearchInput>
          </HeaderSearch>
          <CategoryLinks>
            {categories1.map(({ displayText }) => (
              <CategoryLink1>{displayText}</CategoryLink1>
            ))}
            {categories2.map(({ displayText }) => (
              <CategoryLink2>{displayText}</CategoryLink2>
            ))}
          </CategoryLinks>
        </HeaderItem>
        <HeaderToolArea>
          <SignOut>Sign Out</SignOut>
          <ProfileImg />
        </HeaderToolArea>
      </HeaderBar>
    </>
  );
}

export default Header;
