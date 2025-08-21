import React, { useState } from "react";

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
          style={{
            padding: "3px 5px 3px 5px",
            width: "250px",
            height: "30px",
            boxSizing: "border-box",
            border: "solid 1px",
            borderRadius: "2px",
          }}
        />

        {type === "password" && (
          <button
            onClick={() => setShowPass(!showPass)}
            style={{
              width: "33px",
              height: "30px",
              position: "absolute",
              right: "-2.2rem",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              border: "solid 1px",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            👁️
          </button>
        )}

        {clearable && value && (
          <button
            style={{
              width: "33px",
              height: "30px",
              position: "absolute",
              right: type === "password" ? "-4.4rem" : "-2.2rem",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              border: "solid 1px",
              borderRadius: "2px",
              cursor: "pointer",
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
