import * as React from "react";

import RepoHeaderContainer from "../RepoHeaderContainer";

export default {
  title: "Example/RepoHeaderContainer",
  component: RepoHeaderContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <RepoHeaderContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
