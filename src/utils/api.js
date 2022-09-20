import { supabase } from "../Client";

const api = {
  hostname: " https://api.github.com/repos",

  async signInWithGithub() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: "github",
    });
    console.log("sign in");
  },
  async signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
  },
  async listLabelPerIssue(owner, issue_number) {
    const response = await fetch(
      `${this.hostname}/${owner}/personal-project/issues/${issue_number}/labels`
    );
    return await response.json();
  },
  async listLabelAll(owner) {
    const response = await fetch(
      `${this.hostname}/${owner}/personal-project/labels`
    );
    return await response.json();
  },
};

export default api;
