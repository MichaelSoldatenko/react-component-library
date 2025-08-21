import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ToastType = "success" | "info" | "error";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor =
    type === "success"
      ? "#007c04ff"
      : type === "error"
        ? "#c20d00ff"
        : "#0068bdff";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        id="toast-div"
        style={{
          background: bgColor,
        }}
      >
        {message}
        <button
          onClick={onClose}
          style={{
            marginLeft: "4rem",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
