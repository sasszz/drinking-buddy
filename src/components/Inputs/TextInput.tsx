"use client";

import clsx from "clsx";

import { Input } from "@base-ui-components/react/input";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx("max-w-[300px]", styles.input)}
    />
  );
};
