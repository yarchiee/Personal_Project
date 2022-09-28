import api from "../../services/api";
import { useEffect, useState } from "react";
// import styled from "styled-components";

import { supabase } from "../../Client";

export async function signOut(setUser) {
  /* sign the user out */

  await supabase.auth.signOut();
  setUser(null);
}

function Oauth() {
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

  // const signInWithGithub = () => {
  //   api.signInWithGithub().then(() => {
  //     console.log("123");
  //   });
  // };

  async function session() {
    /* authenticate with GitHub */
    const session = supabase.auth.session();

    console.log("session");
    console.log(session.provider_token);

    return session.provider_token;
  }
  signOut(setUser);

  if (user) {
    return (
      <div>
        <h1>Hello, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello, please sign in!</h1>
      {/* <button onClick={signInWithGithub}>Sign In</button> */}
      <button onClick={session}>session</button>
    </div>
  );
}

export default Oauth;
