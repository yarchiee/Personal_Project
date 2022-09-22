import { supabase } from "../Client";

const api = {
  hostname: " https://api.github.com",

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
  async session() {
    /* sign the user out */
    await supabase.auth.session();
  },
  async listLabelPerIssue(owner, issue_number) {
    const response = await fetch(
      `${this.hostname}/${owner}/personal-project/issues/${issue_number}/labels`
    );
    return await response.json();
  },
  async listLabelAll() {
    const response = await fetch(
      `${this.hostname}/repos/yarchiee/Personal_Project/labels`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer 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",
        },
        method: "GET",
      }
    );
    return await response.json();
  },
};

export default api;
