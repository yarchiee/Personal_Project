import * as React from "react";

import SeachAllLabels from "../SeachAllLabels";

export default {
  title: "Example/SeachAllLabels",
  component: SeachAllLabels,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <SeachAllLabels {...args} />;

export const Default = Template.bind({});
Default.args = {};
