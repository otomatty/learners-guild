import type { Meta, StoryObj } from "storybook-solidjs";
import { createSignal } from "solid-js";
import Modal, { ModalProps } from "./Modal";
import Button from "../Button/Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate: Story = {
  render: (args: Omit<ModalProps, "isOpen" | "onClose" | "children">) => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>モーダルを開く</Button>
        <Modal
          {...args}
          isOpen={isOpen()}
          onClose={() => setIsOpen(false)}
          title={args.title}
        >
          <p>
            これはモーダルの内容です。必要な情報やフォームなどを配置できます。
          </p>
        </Modal>
      </>
    );
  },
};

export const Default: Story = {
  ...ModalTemplate,
  args: {
    title: "基本的なモーダル",
  },
};

export const WithFooter: Story = {
  ...ModalTemplate,
  args: {
    title: "フッター付きモーダル",
    footer: (
      <>
        <Button onClick={() => console.log("キャンセル")}>キャンセル</Button>
        <Button onClick={() => console.log("保存")}>保存</Button>
      </>
    ),
  },
};
