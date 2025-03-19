"use client";

import React, { useState } from "react";
import { Input } from "@base-ui-components/react";
import Image from "next/image";
import Show from "../../../public/show.svg";
import Hide from "../../../public/hide.svg";

import styles from "./TextInput.module.scss";

interface PasswordProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Password = ({ value, onChange }: PasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-[300px]">
      <Input
        type={isVisible ? "text" : "password"}
        className={`${styles.input} w-full`}
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8"
      >
        <Image
          src={isVisible ? Show : Hide}
          alt="Toggle Icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
