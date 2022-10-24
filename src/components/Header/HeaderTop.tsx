import styled from "styled-components";
import { MarkGithubIcon, ThreeBarsIcon } from "@primer/octicons-react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageState, SetPageState } from "../../context";
import { supabase } from "../../Client";
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
  display: none;
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
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const categories1 = [
  {
    name: "request",
    displayText: "Pull requests",
    index: "c11",
  },
  {
    name: "issues",
    displayText: "Issues",
    index: "c12",
  },
  {
    name: "marketplace",
    displayText: "Marketplace",
    index: "c13",
  },
  {
    name: "explore",
    displayText: "Explore",
    index: "c14",
  },
];
const categories2 = [
  {
    name: "request",
    displayText: "Pulls",
    index: "c21",
  },
  {
    name: "issues",
    displayText: "Issues",
    index: "c22",
  },
  {
    name: "marketplace",
    displayText: "Marketplace",
    index: "c23",
  },
  {
    name: "explore",
    displayText: "Explore",
    index: "c24",
  },
];

function Header() {
  const navigate = useNavigate();
  const pageState = useContext<any>(PageState);
  const { userInfo } = pageState;
  const setPageState = useContext<any>(SetPageState);
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);
  async function checkUser() {
    const user = supabase.auth.user();
    const tokenobj = supabase.auth.session();
    const token = tokenobj.provider_token;
    window.localStorage.setItem("loginToken", token);
    setUser(user);
    const loginName = user?.user_metadata.user_name;
    const newUserInfo = { ...userInfo, userName: loginName, token: token };
    const newPageState = { ...pageState, userInfo: newUserInfo };
    setPageState(newPageState);
    navigate(`/${loginName}`);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        scopes: "repo gist notifications",
      }
    );
    supabase.auth.session();
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
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
          {categories1.map(({ displayText, index }) => (
            <CategoryLink1 key={index}>{displayText}</CategoryLink1>
          ))}
          {categories2.map(({ displayText, index }) => (
            <CategoryLink2 key={index}>{displayText}</CategoryLink2>
          ))}
        </CategoryLinks>
      </HeaderItem>
      <HeaderToolArea>
        {user && (
          <div className="text-[#fff] flex">
            <button onClick={signOut}>Sign out</button>
            <img
              src={user?.user_metadata.avatar_url}
              alt=""
              className="w-[20px] h-[20px] rounded-[50%] ml-[10px] border-[#000]   "
            />
          </div>
        )}

        {!user && (
          <div className="text-[#fff]">
            <button onClick={signInWithGithub}>Sign In</button>
          </div>
        )}
      </HeaderToolArea>
    </HeaderBar>
  );
}

export default Header;
