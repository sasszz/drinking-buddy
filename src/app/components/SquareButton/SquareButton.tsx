"use client";

import styles from "./SquareButton.module.scss";

interface SquareButtonProps {
  text: string;
}

export const SquareButton = ({ text }: SquareButtonProps) => {
  return <button className={styles.background}>{text}</button>;
};
