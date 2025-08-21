import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Menu {
  label: string;
  children?: Menu[];
}

interface SidebarMenuProps {
  items: Menu[];
  onClose: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, onClose }) => {
  const open = true;
  const [expanded, setExpanded] = useState<null | string>(null);

  function toggleExpanded(label: string) {
    setExpanded(expanded === label ? null : label);
  }

  return (
    <>
      {open && (
        <AnimatePresence>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "black",
            }}
          ></motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        <motion.div
          key="sidebar"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "fixed",
            top: 0,
            right: open ? 0 : "-250px",
            width: "250px",
            height: "100%",
            background: "white",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
            padding: "1rem",
            transition: "right 0.3s ease",
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "solid 1px",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
          <ul
            style={{
              listStyle: "none",
              padding: "5px 10px 5px 10px",
            }}
          >
            {items.map((item) => (
              <li key={item.label}>
                <div
                  onClick={() => item.children && toggleExpanded(item.label)}
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {item.label}
                </div>
                {item.children && expanded === item.label && (
                  <ul style={{ paddingLeft: "1rem", listStyle: "none" }}>
                    {item.children.map((child) => (
                      <li
                        key={child.label}
                        style={{
                          marginTop: "5px",
                        }}
                      >
                        {child.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
