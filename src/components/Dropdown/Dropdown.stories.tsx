import type { Meta, StoryObj } from "storybook-solidjs";
import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "option1", label: "オプション1" },
  { value: "option2", label: "オプション2" },
  { value: "option3", label: "オプション3" },
  { value: "option4", label: "オプション4" },
  { value: "option5", label: "オプション5" },
];

export const Default: Story = {
  args: {
    options: options,
    onSelect: (value: string) => console.log("選択された値:", value),
    placeholder: "選択してください",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    options: options,
    onSelect: (value: string) => console.log("選択された値:", value),
  },
};
