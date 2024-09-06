import type { Meta, StoryObj } from "storybook-solidjs";
import { createSignal } from "solid-js";
import Select, { SelectProps } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

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
  render: (args: Partial<SelectProps>) => {
    const [value, setValue] = createSignal("");
    return (
      <Select
        options={options}
        value={value()}
        onChange={(newValue) => setValue(newValue)}
        {...args}
      />
    );
  },
  args: {
    placeholder: "選択してください",
  },
};

export const WithoutPlaceholder: Story = {
  render: (args: Partial<SelectProps>) => {
    const [value, setValue] = createSignal("");
    return (
      <Select
        options={options}
        value={value()}
        onChange={(newValue) => setValue(newValue)}
        {...args}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args: Partial<SelectProps>) => {
    const [value, setValue] = createSignal("");
    return (
      <Select
        options={options}
        value={value()}
        onChange={(newValue) => setValue(newValue)}
        disabled
        {...args}
      />
    );
  },
  args: {
    placeholder: "無効化されたセレクト",
  },
};
