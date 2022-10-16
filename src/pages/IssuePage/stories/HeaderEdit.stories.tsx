import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import HeaderEdit from "../HeaderEdit";
// import DiscussionItem from "../../../components/DiscussionItem";

export default {
  title: "Example/HeaderEdit",
  component: HeaderEdit,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <BrowserRouter>
    <div
      style={{
        position: "absolute",
        width: "80%",
        top: "40%",
        left: "10%",
      }}
    >
      <HeaderEdit {...args} />
    </div>
  </BrowserRouter>
);
export const Default = Template.bind({});
Default.args = {
  updateIssue: {
    issueNumber: 5,
    title: "Hello",
    body: "How are you?",
    state: "open",
    assignees: [],
    labels: [],
  },
  perIssueData: {
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
      login: "elaine011",
    },
    author_association: "COLLABORATOR",
    body: "Me too",
    assignees: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
      },
    ],
    labels: [
      {
        color: "E6CD18",
        name: "completed",
      },
    ],
    title: "Hello",
    number: 7,
    comments: 1,
  },

  onClick: () => {},
  issueNumber: 10,

  setPerIssueData: {},
  setUpdateIssue: {},
};
