import type { Meta, StoryObj } from "storybook-solidjs";
import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "テキストを入力してください...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "パスワードを入力してください...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "メールアドレスを入力してください...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "数値を入力してください...",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "無効化された入力フィールド",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    type: "text",
    placeholder: "エラー状態の入力フィールド",
    error: true,
  },
};
