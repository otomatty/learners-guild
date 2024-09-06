import type { Meta, StoryObj } from "storybook-solidjs";
import Accordion, { AccordionProps } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    allowMultiple: { control: "boolean" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const accordionItems = [
  {
    title: "セクション1",
    content:
      "これはセクション1の内容です。アコーディオンの詳細をここに記述します。",
  },
  {
    title: "セクション2",
    content:
      "これはセクション2の内容です。長い文章や複雑な情報を含めることができます。",
  },
  {
    title: "セクション3",
    content:
      "これはセクション3の内容です。ユーザーが必要な情報を簡単に見つけられるようにします。",
  },
];

export const Default: Story = {
  render: (args: AccordionProps) => <Accordion {...args} />,
  args: {
    items: accordionItems,
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  render: (args: AccordionProps) => <Accordion {...args} />,
  args: {
    items: accordionItems,
    allowMultiple: true,
  },
};
