"use client";

import clsx from "clsx";

import { useState } from "react";
import Image from "next/image";
import Down from "../../../public/down.svg";

import styles from "./TextInput.module.scss";

interface HeightDropdownProps {
  onChange: (feet: string, inches: string) => void;
}

export const HeightDropdown = ({ onChange }: HeightDropdownProps) => {
  const feetOptions = ["4", "5", "6", "7"];
  const inchOptions = Array.from({ length: 12 }, (_, i) => i.toString());

  const [feet, setFeet] = useState<string>(feetOptions[1]);
  const [inches, setInches] = useState<string>(inchOptions[8]);

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
    <div className="flex flex-row gap-4">
      <div className="relative w-full">
        <select
          value={feet}
          onChange={handleFeetChange}
          className={clsx("appearance-none w-[110px]", styles.input)}
        >
          {feetOptions.map((option) => (
            <option key={option} value={option}>
              {option} ft
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Image src={Down} alt="Down Icon" width={24} height={24} />
        </div>
      </div>

      {/* Inches Dropdown */}
      <div className="relative w-full">
        <select
          value={inches}
          onChange={handleInchesChange}
          className={clsx("appearance-none w-[110px]", styles.input)}
        >
          {inchOptions.map((option) => (
            <option key={option} value={option}>
              {option} in
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Image src={Down} alt="Down Icon" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
