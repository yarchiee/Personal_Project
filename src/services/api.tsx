import { supabase } from "../Client";
import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: "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",
});
const setting = {
  owner: "yarchiee",
  repo: "Personal_Project",
};

const api = {
  hostname: " https://api.github.com",
  async updateALabel(sourceName, data) {
    /**
     {
      owner: setting.owner,
      repo: setting.repo,
      name: sourceName,
      new_name: data.name,
      description: data.description,
      color: 'b01f26'
      }
     */
    const patchData = { ...setting, name: sourceName, data };
    console.log("t");
    console.log(patchData);
    const result = await octokit.request(
      "PATCH /repos/{owner}/{repo}/labels/{name}",
      patchData
    );
    return result;
  },
  async deleteLabel(sourceName) {
    const deleteData = { ...setting, name: sourceName };
    await octokit.request(
      "DELETE /repos/{owner}/{repo}/labels/{name}",
      deleteData
    );
  },
  async createLabel(sourceName, data) {
    const createData = { ...setting, name: sourceName, data };
    await octokit.request(
      "POST /repos/{owner}/{repo}/labels/{name}",
      createData
    );
  },

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
  async createALabel(data) {
    const response = await fetch(
      `${this.hostname}/repos/yarchiee/Personal_Project/labels`,
      {
        body: JSON.stringify(data),
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer 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",
        },
        method: "POST",
      }
    );
    return await response.json();
  },
};

export default api;
