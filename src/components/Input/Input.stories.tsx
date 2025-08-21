import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Type something...",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: { type: "text" },
};

export const Password: Story = {
  args: { type: "password" },
};

export const PasswordWithClear: Story = {
  args: { type: "password", clearable: true },
};

export const Number: Story = {
  args: { type: "number", clearable: true },
};
