import type { Meta, StoryObj } from "storybook-solidjs";
import { createSignal } from "solid-js";
import Pagination, { PaginationProps } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: { control: "number" },
    maxVisiblePages: { control: "number" },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Partial<PaginationProps>) => {
    const [currentPage, setCurrentPage] = createSignal(1);
    return (
      <Pagination
        currentPage={currentPage()}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={args.totalPages || 10}
        maxVisiblePages={args.maxVisiblePages}
      />
    );
  },
  args: {
    totalPages: 10,
    maxVisiblePages: 5,
  },
};

export const ManyPages: Story = {
  render: (args: Partial<PaginationProps>) => {
    const [currentPage, setCurrentPage] = createSignal(1);
    return (
      <Pagination
        currentPage={currentPage()}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={args.totalPages || 100}
        maxVisiblePages={args.maxVisiblePages}
      />
    );
  },
  args: {
    totalPages: 100,
    maxVisiblePages: 7,
  },
};
