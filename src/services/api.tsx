import { supabase } from "../Client";
import { Octokit } from "octokit";
const token = localStorage.getItem("loginToken");
const octokit = new Octokit({
  auth: token,
});
let setting = {
  owner: "yarchiee",
  repo: "Personal_Project",
};
const api = {
  updateSetting(obj) {
    setting = { ...obj };
  },
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
          "if-none-match": "",
        },
        method: "GET",
      }
    );
    return await response.json();
  },

  async createIssue(data) {
    return await octokit.request("POST /repos/{owner}/{repo}/issues", {
      ...setting,
      title: data.title,
      body: data.body,
      assignees: data.assignees,
      labels: data.labels,
    });
  },

  async githubSeach(query, currentpage) {
    const res = await octokit.request("GET /search/issues", {
      headers: {
        "if-none-match": "",
      },
      q: `repo:${setting.owner}/${setting.repo} ${query}`,
      per_page: 10,
      page: currentpage,
    });
    const result = res.data;
    return result;
  },
  async githubSeachbak(query) {
    const response = await fetch(
      `${this.hostname}/search/issues?q=repo:${setting.owner}/${setting.repo} ${query}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        method: "GET",
      }
    );
    return await response.json();
  },
  async getAssigneeMenber() {
    const res = await octokit.request("GET /repos/{owner}/{repo}/assignees", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      ...setting,
    });
    const result = res.data;
    return result;
  },

  async getTimeLineEvent(newCreateIssue) {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        ...setting,
        issue_number: newCreateIssue.issueNumber,
      }
    );
    const result = res.data;
    return result;
  },
  async getAnIssue(newCreateIssue) {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        ...setting,
        issue_number: newCreateIssue.issueNumber,
      }
    );
    const result = res.data;
    return result;
  },
  async createComment(createData) {
    const result = await octokit.request(
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
      {
        ...setting,
        issue_number: createData.issueNumber,
        body: createData.body,
      }
    );
    return result;
  },
  async updateComment(obj) {
    const result = await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        ...setting,
        ...obj,
      }
    );
    return result;
  },
  async deleteComment(id) {
    const result = await octokit.request(
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
      {
        ...setting,
        comment_id: id,
      }
    );
    return result;
  },
  async updateIssue(updateIssue) {
    console.log(updateIssue);

    const result = await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        ...setting,
        issue_number: updateIssue.issueNumber,
        title: updateIssue.title,
        body: updateIssue.body,
        assignees: updateIssue.assignees.login,
        state: updateIssue.state,
        labels: updateIssue.labels.name,
      }
    );
    return result;
  },
  async getUser() {
    const res = await octokit.request("GET /user", {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });
    const result = res.data;
    return result;
  },
  async getUserRepo(userName) {
    const res = await octokit.request("GET /users/{username}/repos", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      username: userName,
    });
    const result = res.data;
    return result;
  },
};

export default api;
