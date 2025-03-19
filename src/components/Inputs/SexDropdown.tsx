"use client";

import { useState } from "react";

import styles from "./TextInput.module.scss";

interface SexDropdownProps {
  onChange: (sex: string) => void;
}

export const SexDropdown = ({ onChange }: SexDropdownProps) => {
  const [sex, setSex] = useState<string>("");

  const sexOptions = ["Male", "Female", "Other", "Prefer not to say"];

  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSex(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Sex Dropdown */}
      <select value={sex} onChange={handleSexChange} className={styles.input}>
        {sexOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
