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
    const result = await octokit.request(
      "PATCH /repos/{owner}/{repo}/labels/{name}",
      {
        headers: {
          "if-none-match": "",
        },
        ...setting,
        name: sourceName,
        data,
      }
    );
    return result;
  },
  async deleteLabel(sourceName) {
    await octokit.request("DELETE /repos/{owner}/{repo}/labels/{name}", {
      headers: {
        "if-none-match": "",
      },
      ...setting,
      name: sourceName,
    });
  },
  async createLabel(newCreateData) {
    await octokit.request("POST /repos/{owner}/{repo}/labels", {
      headers: {
        "if-none-match": "",
      },
      ...setting,
      name: newCreateData.name,
      description: newCreateData.description,
      color: newCreateData.color,
    });
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
      headers: {
        "if-none-match": "",
      },
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
          "if-none-match": "",
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
        "if-none-match": "",
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
          "if-none-match": "",
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
          "if-none-match": "",
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
        headers: {
          "if-none-match": "",
        },
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
        headers: {
          "if-none-match": "",
        },
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
        headers: {
          "if-none-match": "",
        },
        ...setting,
        comment_id: id,
      }
    );
    return result;
  },
  async updateIssue(updateIssue) {
    const result = await octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        headers: {
          "if-none-match": "",
        },
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
        "if-none-match": "",
      },
    });
    const result = res.data;
    return result;
  },
  async getUserRepo(userName) {
    const res = await octokit.request("GET /users/{username}/repos", {
      headers: {
        "if-none-match": "",
      },
      username: userName,
    });
    const result = res.data;
    return result;
  },
};

export default api;
