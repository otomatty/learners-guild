import type { Meta, StoryObj } from "storybook-solidjs";
import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "チェックボックス",
  },
};

export const Checked: Story = {
  args: {
    label: "チェック済み",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    label: "無効化されたチェックボックス",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "無効化されたチェック済み",
    disabled: true,
    checked: true,
  },
};
