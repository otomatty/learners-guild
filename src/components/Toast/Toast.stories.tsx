import type { Meta, StoryObj } from "storybook-solidjs";
import ToastContainer, { addToast } from "./ToastContainer";
import Button from "../Button/Button";

const meta = {
  title: "Components/Toast",
  component: ToastContainer,
} satisfies Meta<typeof ToastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const showToast = (type: "success" | "error" | "info") => {
      addToast({
        message: `これは${type}トーストです。`,
        type: type,
        duration: 3000,
      });
    };

    return (
      <div>
        <Button onClick={() => showToast("success")}>成功トースト</Button>
        <Button onClick={() => showToast("error")}>エラートースト</Button>
        <Button onClick={() => showToast("info")}>情報トースト</Button>
        <ToastContainer />
      </div>
    );
  },
};
