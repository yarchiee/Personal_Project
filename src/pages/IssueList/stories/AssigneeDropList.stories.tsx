import * as React from "react";

import AssigneeDropList from "../DropList/AssigneeDropList";

export default {
  title: "Example/AssigneeDropList",
  component: AssigneeDropList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div
    style={{
      position: "absolute",
      top: "45%",
      left: "45%",
    }}
  >
    <AssigneeDropList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: {
    name: "Hello",
    color: "000000",
    description: "",
  },
};
