"use client";

import clsx from "clsx";

import { useState } from "react";
import Image from "next/image";
import Down from "../../../public/down.svg";

import styles from "./TextInput.module.scss";

interface WeightDropdownProps {
  onChange: (weight: string) => void;
}

export const WeightDropdown = ({ onChange }: WeightDropdownProps) => {
  // Weight options in lbs
  const weightOptions = Array.from({ length: 50 }, (_, i) =>
    (100 + i * 5).toString()
  );

  const [weight, setWeight] = useState<string>(weightOptions[15]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setWeight(value);
    onChange(value);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Weight Dropdown */}
      <div className="relative w-full">
        <select
          value={weight}
          onChange={handleWeightChange}
          className={clsx("appearance-none  w-[150px]", styles.input)}
        >
          {weightOptions.map((option) => (
            <option key={option} value={option}>
              {option} lbs
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
