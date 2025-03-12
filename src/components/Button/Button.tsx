"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <div className="relative inline-block">
      {/* Offset Shadow */}
      <div className="absolute -bottom-[10px] -right-[10px] bg-black w-full h-full rounded-full"></div>

      {/* Main Button */}
      <motion.button
        className={`${styles.main} ${disabled ? styles.disabled : ""} ${
          destructive ? styles.destructive : ""
        }`}
        disabled={disabled}
        type={type || "button"}
        onClick={onClick}
        whileTap={{ x: 5, y: 5 }} // Moves the button down-right when pressed
      >
        {/* Inside Fill */}
        <span className="absolute inset-0 rounded-full bg-white opacity-85"></span>
        <span className="relative z-10">{buttonText}</span>
      </motion.button>
    </div>
  );
};
