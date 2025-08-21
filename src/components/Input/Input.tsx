import React, { useState } from "react";
import "../../App.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({ type = "text", clearable }) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          aria-label="Password"
          placeholder="Enter the password"
          type={type === "password" && showPass ? "text" : type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {type === "password" && (
          <button
            onClick={() => setShowPass(!showPass)}
            className="small-btns"
            style={{
              right: "-2.2rem",
            }}
          >
            👁️
          </button>
        )}

        {clearable && value && (
          <button
            className="small-btns"
            style={{
              right: type === "password" ? "-4.4rem" : "-2.2rem",
            }}
            onClick={() => setValue("")}
          >
            &times;
          </button>
        )}
      </div>
    </>
  );
};
