"use client";

import { Input } from "@base-ui-components/react/input";

import styles from "./TextInput.module.scss";

interface TextInputProps {
  placeholder: string;
}

export const TextInput = ({ placeholder }: TextInputProps) => {
  return <Input placeholder={placeholder} className={styles.input} />;
};
