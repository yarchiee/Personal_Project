import styled from "styled-components";
import { MarkGithubIcon, ThreeBarsIcon } from "@primer/octicons-react";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { supabase } from "../../Client";

export async function signOut(setUser) {
  /* sign the user out */

  await supabase.auth.signOut();
  setUser(null);
}
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
const Hello = styled(SignOut)``;
const ProfileImg = styled.div`
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-image: url("https://qvtvnktztxmigxjrdmig.supabase.co/auth/v1");
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
  const [user, setUser] = useState(null);
  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);
  async function checkUser() {
    /* if a user is signed in, update local state */
    const user = supabase.auth.user();
    console.log(user);
    setUser(user);
  }

  const signInWithGithub = () => {
    api.signInWithGithub().then(() => {
      console.log("123");
    });
  };

  async function session() {
    /* authenticate with GitHub */
    // const session = supabase.auth.session();
    // console.log("session");
    // console.log(session.provider_token);
    // return session.provider_token;
  }
  signOut(setUser);
  if (user) {
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
            <Hello>{user.email}</Hello>
            <SignOut onClick={signOut}>Sign Out</SignOut>
            <ProfileImg />
          </HeaderToolArea>
        </HeaderBar>
      </>
    );
    //   <div>
    //     <h1>Hello, {user.email}</h1>
    //     <button onClick={signOut}>Sign out</button>
    //   </div>
    // );
  }
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
          <SignOut onClick={signInWithGithub}>Sign in</SignOut>
          <ProfileImg />
        </HeaderToolArea>
      </HeaderBar>
    </>
    // <div>
    //   <h1>Hello, please sign in!</h1>
    //   <button onClick={signInWithGithub}>Sign In</button>
    //   <button onClick={session}>session</button>
    // </div>
  );
  // return (
  //   <>
  //     <HeaderBar>
  //       <ThreeBarsIconControl>
  //         <ThreeBarsIcon size={24} fill="#fff" />
  //       </ThreeBarsIconControl>
  //       <MarkGithubIconControl>
  //         <MarkGithubIcon size={32} fill="#fff" />
  //       </MarkGithubIconControl>
  //       <HeaderItem>
  //         <HeaderSearch>
  //           <HeaderSearchInput placeholder="Search or jump to..."></HeaderSearchInput>
  //         </HeaderSearch>
  //         <CategoryLinks>
  //           {categories1.map(({ displayText }) => (
  //             <CategoryLink1>{displayText}</CategoryLink1>
  //           ))}
  //           {categories2.map(({ displayText }) => (
  //             <CategoryLink2>{displayText}</CategoryLink2>
  //           ))}
  //         </CategoryLinks>
  //       </HeaderItem>
  //       <HeaderToolArea>
  //         <SignOut>Sign Out</SignOut>
  //         <ProfileImg />
  //       </HeaderToolArea>
  //     </HeaderBar>
  //   </>
  // );
}

export default Header;
