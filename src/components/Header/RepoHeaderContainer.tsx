import styled from "styled-components";

import {
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
  margin: 0 28px;
  display: flex;
  align-items: center;
  width: 1000px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const UnderLineNavItemPerEach = styled.div`
  line-height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
const UnderLineNavItemText = styled.div`
  margin-left: 10px;
  color: #24292f;
`;
const UnderLineNavItemChoose = styled(UnderLineNavItemPerEach)`
  line-height: 48px;
  border-bottom: 2px solid #fd8c73;
`;

const RepoHeaderContainer = () => {
  return (
    <>
      <RepoContainerHeader>
        <RepoContainerUp>
          <RepoIcon size={16} fill="#57606a" />
          <RepoOwner>yarchiee</RepoOwner>
          <Reposlash>/</Reposlash>
          <RepoName>Personal_Project</RepoName>
        </RepoContainerUp>
        <UnderLineNavItem>
          <UnderLineNavItemPerEach>
            <CodeIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Code</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemChoose>
            <IssueOpenedIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Issues</UnderLineNavItemText>
          </UnderLineNavItemChoose>
          <UnderLineNavItemPerEach>
            <GitPullRequestIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Pull requests</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <PlayIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Actions</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <TableIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Projects</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <BookIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Wiki</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <ShieldIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Secuity</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <GraphIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Insights</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach>
            <GearIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Settings</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
        </UnderLineNavItem>
      </RepoContainerHeader>
    </>
  );
};

export default RepoHeaderContainer;
