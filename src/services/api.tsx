import { supabase } from "../Client";
import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: process.env.REACT_APP_PASSWORD,
});
// const getOctokit = new Octokit({});
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
  async createLabel(newCreateData) {
    await octokit.request("POST /repos/{owner}/{repo}/labels", {
      ...setting,
      name: newCreateData.name,
      description: newCreateData.description,
      color: newCreateData.color,
    });
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
          // Authorization: `Bearer ${process.env.REACT_APP_OOATH}`,
        },
        method: "GET",
      }
    );
    return await response.json();
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

  ////////////////get data//////////////////////////////////////////
  async listRepositoryIssue() {
    const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      ...setting,
    });
    const result = res.data;
    return result;
  },
  async getOpenIssue() {
    const response = await fetch(
      `${this.hostname}/search/issues?q=repo:yarchiee/Personal_Project is:issue is:open`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          //  Authorization: `Bearer ${process.env.REACT_APP_OOATH}`,
        },
        method: "GET",
      }
    );
    return await response.json();
  },
  async getAssigneeMenber() {
    const res = await octokit.request("GET /repos/{owner}/{repo}/assignees", {
      ...setting,
    });
    const result = res.data;
    return result;
  },
  // async getAssigneeMenber() {
  //   const res = await octokit.request("GET /repos/{owner}/{repo}/assignees", {
  //     ...setting,
  //   });
  //   const result = res.data;
  //   return result;
  // },
};

export default api;
