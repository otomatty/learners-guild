import type { Meta, StoryObj } from "storybook-solidjs";
import { createSignal } from "solid-js";
import Slider, { SliderProps } from "./Slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    showValue: { control: "boolean" },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SliderProps) => {
    const [value, setValue] = createSignal(args.value);
    return (
      <Slider
        {...args}
        value={value()}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: true,
  },
};

export const CustomRange: Story = {
  render: (args: SliderProps) => {
    const [value, setValue] = createSignal(args.value);
    return (
      <Slider
        {...args}
        value={value()}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  args: {
    min: -50,
    max: 50,
    step: 5,
    value: 0,
    showValue: true,
  },
};
