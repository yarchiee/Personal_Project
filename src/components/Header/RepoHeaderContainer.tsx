import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { KebabHorizontalIcon } from "@primer/octicons-react";
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
  display: flex;
  align-items: center;
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
  height: 48px;
  margin: 0 28px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1015.9px) {
    justify-content: start;
    display: 0;
  }
`;
const UnderLineNavItemPerEach = styled.div`
  line-height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;
const UnderLineNavItemPerEach2 = styled(UnderLineNavItemPerEach)`
  line-height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  @media screen and (max-width: 1015.9px) {
    display: none;
  }
`;
const UnderLineNavItemText = styled.div`
  margin-left: 10px;
  color: #24292f;
`;
const UnderLineNavItemChoose = styled(UnderLineNavItemPerEach)`
  line-height: 48px;
  border-bottom: 2px solid #fd8c73;
`;
const ThreeDotIcon = styled(KebabHorizontalIcon)`
  display: none;
  @media screen and (max-width: 1011.9px) {
    display: block;
    &:hover {
      color: #fff;
    }
  }
  @media screen and (max-width: 1015.9px) {
    display: block;
  }
`;
const ThreeDotBotton = styled.button`
  width: 42px;
  height: 28px;
  background-color: #f6f8fa;
  border-radius: 6px;
  margin-top: 7px;
  &:hover {
    background-color: #0969da;
  }
  display: none;
  @media screen and (max-width: 1015.9px) {
    display: block;
    margin-left: auto;
  }
`;
const RepoHeaderContainer = () => {
  const navigate = useNavigate();
  const { userId, userRepo } = useParams();
  const isVisible = userId && userRepo;

  return (
    <>
      <RepoContainerHeader style={!isVisible ? { display: "none" } : {}}>
        <RepoContainerUp>
          <RepoIcon size={16} fill="#57606a" />
          <RepoOwner>{userId}</RepoOwner>
          <Reposlash>/</Reposlash>
          <RepoName>{userRepo}</RepoName>
        </RepoContainerUp>
        <UnderLineNavItem>
          <UnderLineNavItemPerEach>
            <CodeIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Code</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemChoose onClick={() => navigate("/issues")}>
            <IssueOpenedIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Issues</UnderLineNavItemText>
          </UnderLineNavItemChoose>
          <UnderLineNavItemPerEach>
            <GitPullRequestIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Pull requests</UnderLineNavItemText>
          </UnderLineNavItemPerEach>
          <UnderLineNavItemPerEach2>
            <PlayIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Actions</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <UnderLineNavItemPerEach2>
            <TableIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Projects</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <UnderLineNavItemPerEach2>
            <BookIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Wiki</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <UnderLineNavItemPerEach2>
            <ShieldIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Secuity</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <UnderLineNavItemPerEach2>
            <GraphIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Insights</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <UnderLineNavItemPerEach2>
            <GearIcon size={16} fill="#57606a" />
            <UnderLineNavItemText>Settings</UnderLineNavItemText>
          </UnderLineNavItemPerEach2>
          <ThreeDotBotton>
            <ThreeDotIcon size={16} />
          </ThreeDotBotton>
        </UnderLineNavItem>
      </RepoContainerHeader>
    </>
  );
};

export default RepoHeaderContainer;
