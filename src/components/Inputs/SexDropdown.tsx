"use client";

import clsx from "clsx";

import { useState } from "react";
import Image from "next/image";
import Down from "../../../public/down.svg";

import styles from "./TextInput.module.scss";

interface SexDropdownProps {
  onChange: (sex: string) => void;
}

export const SexDropdown = ({ onChange }: SexDropdownProps) => {
  const [sex, setSex] = useState<string>("");

  const sexOptions = ["Male", "Female", "Other", "Decline"];

  const handleSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSex(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Sex Dropdown */}
      <div className="relative w-full">
        <select
          value={sex}
          onChange={handleSexChange}
          className={clsx("appearance-none  w-[150px]", styles.input)}
        >
          {sexOptions.map((option) => (
            <option key={option} value={option}>
              {option}
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
