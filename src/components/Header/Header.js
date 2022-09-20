// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  MarkGithubIcon,
  RepoIcon,
  CodeIcon,
  IssueOpenedIcon,
  GitPullRequestIcon,
  PlayIcon,
  TableIcon,
  BookIcon,
  ShieldIcon,
  GraphIcon,
  GearIcon,
} from "@primer/octicons-react";

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
  border: 1px solid #d8dee4;
  padding-top: 16px;
`;
const RepoContainerUp = styled.div`
  margin-left: 32px;
  padding-bottom: 16px;
  font-size: 20px;
  /* color: #0969da; */
  display: flex;
  align-items: center;
  /* height: 32px; */
  line-height: 30px;
`;
const RepoOwner = styled.div`
  color: #0969da;
  margin-left: 8px;
`;
const Reposlash = styled.div`
  color: #57606a;
  margin: 0 4px;
  font-size: 20px;
`;
const RepoName = styled.div`
  color: #0969da;
  font-weight: 600;
`;
const UnderLineNavItem = styled.div`
  /* background-color: yellow; */
  /* width: 100%; */
  height: 48px;
  margin: 0 32px;
  display: flex;
  align-items: center;
`;
const UnderLineNavItemPerEach = styled.div`
  line-height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
const UnderLineNavItemText = styled.div`
  margin-left: 8px;
`;
const UnderLineNavItemChoose = styled(UnderLineNavItemPerEach)`
  line-height: 48px;
  border-bottom: 2px solid #fd8c73;
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
      <RepoContainerHeader>
        <RepoContainerUp>
          <RepoIcon size={16} />
          <RepoOwner>yarchiee</RepoOwner>
          <Reposlash>/</Reposlash>
          <RepoName>Personal_Project</RepoName>
        </RepoContainerUp>
        <UnderLineNavItem>
          <UnderLineNavItemPerEach>
            <CodeIcon size={16} />
            <UnderLineNavItemText>Code</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemChoose>
            <IssueOpenedIcon size={16} />
            <UnderLineNavItemText>Issues</UnderLineNavItemText>
          </UnderLineNavItemChoose>
          <UnderLineNavItemPerEach>
            <GitPullRequestIcon size={16} />
            <UnderLineNavItemText>Pull requests</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <PlayIcon size={16} />
            <UnderLineNavItemText>Actions</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <TableIcon size={16} />
            <UnderLineNavItemText>Projects</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <BookIcon size={16} />
            <UnderLineNavItemText>Wiki</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <ShieldIcon size={16} />
            <UnderLineNavItemText>Secuity</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <GraphIcon size={16} />
            <UnderLineNavItemText>Insights</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <GearIcon size={16} />
            <UnderLineNavItemText>Settings</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
        </UnderLineNavItem>
      </RepoContainerHeader>
    </>
  );
}

export default Header;
