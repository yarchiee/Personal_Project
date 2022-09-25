import * as React from "react";

import LabelTag from "../LabelTag";

export default {
  title: "Example/LabelTag",
  component: LabelTag,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <LabelTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectColorCode: "000000",
  typeLabelName: "Hello",
  lightordark: () => {},
};
