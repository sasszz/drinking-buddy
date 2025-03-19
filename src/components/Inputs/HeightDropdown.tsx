"use client";

import { useState } from "react";

import styles from "./TextInput.module.scss";

interface HeightDropdownProps {
  onChange: (feet: string, inches: string) => void;
}

export const HeightDropdown = ({ onChange }: HeightDropdownProps) => {
  const [feet, setFeet] = useState<string>("");
  const [inches, setInches] = useState<string>("");

  const feetOptions = ["4", "5", "6", "7"];
  const inchOptions = Array.from({ length: 12 }, (_, i) => i.toString());

  const handleFeetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFeet(value);
    onChange(value, inches);
  };

  const handleInchesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setInches(value);
    onChange(feet, value);
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {/* Feet Dropdown */}
      <select value={feet} onChange={handleFeetChange} className={styles.input}>
        <option value="" disabled>
          5
        </option>
        {feetOptions.map((option) => (
          <option key={option} value={option}>
            {option} ft
          </option>
        ))}
      </select>

      {/* Inches Dropdown */}
      <select
        value={inches}
        onChange={handleInchesChange}
        className={styles.input}
      >
        <option value="" disabled>
          10
        </option>
        {inchOptions.map((option) => (
          <option key={option} value={option}>
            {option} in
          </option>
        ))}
      </select>
    </div>
  );
};
