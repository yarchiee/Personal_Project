import * as React from "react";
import LabelDropList from "../DropList/LabelDropList";

export default {
  title: "Example/LabelDropList",
  component: LabelDropList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div
    style={{
      position: "absolute",
      top: "20%",
      left: "60%",
    }}
  >
    <LabelDropList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  labelData: [
    {
      color: "F9D0C4",
      default: false,
      description: "",
      id: 4576642667,
      name: "78789",
      node_id: "LA_kwDOIB0T9s8AAAABEMoGaw",
      url: "https://api.github.com/repos/yarchiee/Personal_Project/labels/78789",
    },
    {
      color: "BFDADC",
      default: false,
      description: "",
      id: 4576273991,
      name: "hello~",
      node_id: "LA_kwDOIB0T9s8AAAABEMRmRw",
      url: "https://api.github.com/repos/yarchiee/Personal_Project/labels/hello~",
    },
  ],
  setQuery: [],
  query: "",
};
