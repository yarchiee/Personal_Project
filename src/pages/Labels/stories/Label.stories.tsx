import * as React from "react";

import Label from "../Label";

export default {
  title: "Example/Label",
  component: Label,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    name: "Hello",
    color: "000000",
    description: "",
  },
  callback: () => {},
};
