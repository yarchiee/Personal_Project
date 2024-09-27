import { BrowserRouter } from "react-router-dom";

import CommentItem from "../Comment/CommentItem";
export default {
  title: "Example/CommentItem",
  component: CommentItem,
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
      <CommentItem {...args} />
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
  data: {
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
  },
  toLowerCase: () => {},
  type: "mentions",
  issueNumber: 10,
  setTimeLineEvent: () => {},
  setPerIssueData: {},
  setUpdateIssue: {},
};
