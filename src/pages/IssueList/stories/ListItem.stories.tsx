import * as React from "react";

import ListItem from "../ListItem";

export default {
  title: "Example/ListItem",
  component: ListItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div style={{}}>
    <ListItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Hello",
    labels: [
      {
        color: "C2E0C6",
        name: "Label",
      },
    ],
    user: {
      login: "yarchiee",
    },
    assignees: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/105163825?v=4",
      },
    ],
    state_reason: "",
    number: 7,
    comments: 7,
  },

  isOpenIssue: [],
};
