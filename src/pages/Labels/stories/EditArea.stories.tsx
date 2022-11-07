import * as React from "react";

import EditArea from "../EditArea";

export default {
  title: "Example/EditArea",
  component: EditArea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <EditArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: "Hello",
    color: "000000",
    description: "",
  },
  onCancel: () => {},
  callback: () => {},
};
