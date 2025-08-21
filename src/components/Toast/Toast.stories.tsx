import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Toast, type ToastType } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

const ToastDemo = ({
  type,
  duration,
}: {
  type: ToastType;
  duration: number;
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(true)} className="medium-btns">
        Show Toast
      </button>
      {visible && (
        <Toast
          message={`This is a ${type} toast`}
          type={type}
          duration={duration}
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
};

export const Success: Story = {
  render: () => <ToastDemo type="success" duration={2000} />,
};

export const Error: Story = {
  render: () => <ToastDemo type="error" duration={3000} />,
};

export const Info: Story = {
  render: () => <ToastDemo type="info" duration={5000} />,
};
