import * as React from "react";

import Pagination from "../Pagination";

export default {
  title: "Example/Pagination",
  component: Pagination,
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
    <Pagination {...args} />
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
