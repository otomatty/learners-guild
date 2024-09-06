import type { Meta, StoryObj } from "storybook-solidjs";
import Tooltip, { TooltipProps } from "./Tooltip";
import Button from "../Button/Button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    content: { control: "text" },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: TooltipProps) => (
    <div style={{ padding: "50px", "text-align": "center" }}>
      <Tooltip {...args}>
        <Button onClick={() => console.log("Button clicked")}>
          ホバーしてください
        </Button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "これはツールチップの内容です",
    position: "top",
  },
};

export const PositionVariants: Story = {
  render: () => (
    <div
      style={{
        padding: "100px",
        display: "flex",
        "justify-content": "space-between",
      }}
    >
      <Tooltip content="上に表示" position="top">
        <Button onClick={() => console.log("Top button clicked")}>上</Button>
      </Tooltip>
      <Tooltip content="下に表示" position="bottom">
        <Button onClick={() => console.log("Bottom button clicked")}>下</Button>
      </Tooltip>
      <Tooltip content="左に表示" position="left">
        <Button onClick={() => console.log("Left button clicked")}>左</Button>
      </Tooltip>
      <Tooltip content="右に表示" position="right">
        <Button onClick={() => console.log("Right button clicked")}>右</Button>
      </Tooltip>
    </div>
  ),
};
