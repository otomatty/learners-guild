import type { Meta, StoryObj } from "storybook-solidjs";
import Card from "./Card";
import Button from "../Button/Button";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "カードのタイトル",
    children: (
      <p>
        これはカードの内容です。ここにテキストや他のコンポーネントを配置できます。
      </p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: "フッター付きカード",
    children: <p>これはカードの内容です。下部にフッターがあります。</p>,
    footer: (
      <Button onClick={() => console.log("ボタンがクリックされました")}>
        アクション
      </Button>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: (
      <p>これはタイトルのないカードです。ヘッダーなしで内容が表示されます。</p>
    ),
  },
};
