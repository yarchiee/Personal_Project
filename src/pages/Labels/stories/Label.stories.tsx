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
  mainImageUrl: "https://api.appworks-school.tw/assets/201807201824/main.jpg",
  colorCodes: ["FFFFFF", "DDFFBB", "CCCCCC"],
  title: "前開衩扭結洋裝",
  price: 799,
};
