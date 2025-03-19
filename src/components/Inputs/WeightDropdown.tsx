"use client";

import { useState } from "react";

import styles from "./TextInput.module.scss";

interface WeightDropdownProps {
  onChange: (weight: string) => void;
}

export const WeightDropdown = ({ onChange }: WeightDropdownProps) => {
  const [weight, setWeight] = useState<string>("");

  // Weight options in lbs
  const weightOptions = Array.from({ length: 31 }, (_, i) =>
    (100 + i * 10).toString()
  );

  const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setWeight(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Weight Dropdown */}
      <select
        value={weight}
        onChange={handleWeightChange}
        className={styles.input}
      >
        {weightOptions.map((option) => (
          <option key={option} value={option}>
            {option} lbs
          </option>
        ))}
      </select>
    </div>
  );
};
