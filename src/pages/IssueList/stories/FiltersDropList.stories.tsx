import * as React from "react";

import FiltersDropList from "../DropList/FiltersDropList";

export default {
  title: "Example/FiltersDropList",
  component: FiltersDropList,
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
    <FiltersDropList {...args} />
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
