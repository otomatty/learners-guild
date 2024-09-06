import type { Meta, StoryObj } from "storybook-solidjs";
import Tabs from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    defaultTab: { control: "number" },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabsData = [
  {
    label: "タブ1",
    content: (
      <p>
        これはタブ1の内容です。ここに任意のコンポーネントやテキストを配置できます。
      </p>
    ),
  },
  {
    label: "タブ2",
    content: (
      <p>
        これはタブ2の内容です。タブをクリックすると、このコンテンツが表示されます。
      </p>
    ),
  },
  {
    label: "タブ3",
    content: (
      <p>
        これはタブ3の内容です。各タブには異なる情報やコンポーネントを含めることができます。
      </p>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: tabsData,
  },
};

export const WithDefaultTab: Story = {
  args: {
    tabs: tabsData,
    defaultTab: 1,
  },
};
