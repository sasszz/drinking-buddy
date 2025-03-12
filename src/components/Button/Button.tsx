"use client";

import React, { useState } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  destructive?: boolean;
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);
}

export const Button = ({
  buttonText,
  type,
  disabled,
  destructive,
  onClick,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => setIsPressed(true);
  const handleRelease = () => setIsPressed(false);

  return (
    <div className="relative inline-block">
      {/* Offset Shadow */}
      <div className="absolute -bottom-[10px] -right-[10px] bg-black w-full h-full rounded-full"></div>
      {/* Main Button */}
      <button
       className={`${styles.main} ${
        isPressed ? styles.pressed : styles.beforePressed
      } 
      ${disabled ? styles.disabled : ""} ${
        destructive ? styles.destructive : ""
      }`}
        disabled={disabled}
        type={type ? type : "button"}
        onClick={onClick}
        onMouseDown={handlePress}
        onMouseUp={handleRelease}
        onMouseLeave={handleRelease}
        onTouchStart={handlePress}
        onTouchEnd={handleRelease}
      >
        {/* Inside Fill */}
        <span className="absolute inset-0 rounded-full bg-white opacity-85"></span>
        <span className="relative z-10">{buttonText}</span>{" "}
      </button>
    </div>
  );
};
