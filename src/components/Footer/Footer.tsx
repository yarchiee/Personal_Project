// import { useEffect, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";

const FooterWidthFullContainer = styled.div`
  margin-top: 40px;
  height: 114.2px;
  font-size: 12px;
`;
const FooterItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 8px;
  border-top: 1px solid #d8dee4;
  justify-content: center;

  @media screen and (max-width: 1248px) {
    width: 95%;
    border-top: 1px solid #d8dee4;
  }
`;
const FooterItemText = styled.div`
  color: #6e7781;
  margin-left: 8px;
  min-width: 105px;
`;
const AreaLabelLinks = styled.div`
  display: flex;
  margin-left: 16px;
  width: 720px;
  justify-content: space-around;
  width: 900px;
`;
const AreaLabelLink = styled.div`
  color: #0969da;
`;
const footertext = [
  {
    name: "terms",
    displayText: "Terms",
  },
  {
    name: "privacy",
    displayText: "Privacy",
  },
  {
    name: "security",
    displayText: "Security",
  },
  {
    name: "status",
    displayText: "Status",
  },
  {
    name: "docs",
    displayText: "Docs",
  },
  {
    name: "contactgithub",
    displayText: "ContactGithub",
  },
  {
    name: "pricing",
    displayText: "Pricing",
  },
  {
    name: "api",
    displayText: "Api",
  },
  {
    name: "trainig",
    displayText: "Trainig",
  },
  {
    name: "blog",
    displayText: "Blog",
  },
  {
    name: "about",
    displayText: "About",
  },
];
function Footer() {
  return (
    <>
      <FooterWidthFullContainer>
        <FooterItemContainer>
          <MarkGithubIcon size={24} fill="#6e7781" />
          <FooterItemText>@ 2022 Github,Inc.</FooterItemText>
          <AreaLabelLinks>
            {footertext.map(({ displayText }) => (
              <AreaLabelLink>{displayText}</AreaLabelLink>
            ))}
          </AreaLabelLinks>
        </FooterItemContainer>
      </FooterWidthFullContainer>
    </>
  );
}

export default Footer;
