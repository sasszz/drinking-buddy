"use client";

import styles from "./SquareButton.module.scss";

interface SquareButtonProps {
  text: string;
  onClick?: () => void;
}

export const SquareButton = ({ text, onClick }: SquareButtonProps) => {
  return (
    <button onClick={onClick} className={styles.background}>
      {text}
    </button>
  );
};
