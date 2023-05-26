import { CircleMenu } from "./CircleMenu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/CircleMenu",
  component: CircleMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "CircleMenu",
  },
};

export const Secondary = {
  args: {
    label: "CircleMenu",
  },
};
