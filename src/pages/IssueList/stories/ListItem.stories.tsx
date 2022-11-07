import * as React from "react";
import { BrowserRouter } from "react-router-dom";

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
  <BrowserRouter>
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: "40%",
      }}
    >
      <ListItem {...args} />
    </div>
  </BrowserRouter>
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
