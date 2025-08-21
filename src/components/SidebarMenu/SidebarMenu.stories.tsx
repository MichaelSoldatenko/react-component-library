import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const SidebarDemo = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Home" },
    {
      label: "Products",
      children: [{ label: "Phones" }, { label: "Laptops" }],
    },
    { label: "About" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          width: "100px",
          height: "30px",
          cursor: "pointer",
          backgroundColor: "transparent",
          borderRadius: "3px",
          border: "solid 1px",
        }}
      >
        Open Sidebar
      </button>
      {open && <SidebarMenu items={items} onClose={() => setOpen(false)} />}
    </>
  );
};

export const Default: Story = {
  render: () => <SidebarDemo />,
};
