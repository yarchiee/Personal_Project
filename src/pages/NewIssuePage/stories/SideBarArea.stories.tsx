import * as React from "react";

import SideBarArea from "../SideBarArea";
// import DiscussionItem from "../../../components/DiscussionItem";

export default {
  title: "Example/SideBarArea",
  component: SideBarArea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div
    style={{
      position: "absolute",
      width: "100%",
      top: "20%",
      left: "30%",
    }}
  >
    <SideBarArea {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  newCreateIssue: {
    title: "create an issue",
    body: "issue body",
    assignees: [],
    labels: [],
    avatarUrl: [],
    labelColor: [],
    checkone: [],
  },
  labelData: [
    {
      color: "ededed",
      name: "bug",
    },
  ],
  isAssignee: [
    {
      avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
      login: "elaine011",
    },
    {
      avatar_url: "https://avatars.githubusercontent.com/u/105163825?v=4",
      login: "yarchiee",
    },
  ],
  list: [
    {
      color: "E6CD18",
      default: false,
      description: "",
      name: "completed",
      avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
      login: "elaine011",
    },
    {
      color: "E6CD18",
      default: false,
      description: "",
      name: "completed",
      avatar_url: "https://avatars.githubusercontent.com/u/70333832?v=4",
      login: "elaine011",
    },
  ],
  whoIsAssignee: "",
  setWhoIsAssignee: [],
  selectdLabel: "",
  setSelectedLabel: [],
  check: "",
  setCheck: [],
  selectedAvatarUrl: "",
  setSelectedAvatarUrl: [],
  selectedLabelColor: "",
  setSelectedLabelColor: [],
};
