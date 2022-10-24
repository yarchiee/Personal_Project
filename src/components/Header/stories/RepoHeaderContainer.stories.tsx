import { BrowserRouter } from "react-router-dom";

import RepoHeaderContainer from "../RepoHeaderContainer";

export default {
  title: "Example/RepoHeaderContainer",
  component: RepoHeaderContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <BrowserRouter>
    <RepoHeaderContainer {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
