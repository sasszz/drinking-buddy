"use client";

import React from "react";
import { TextInput } from "../Inputs";
import { HeightDropdown } from "../Inputs/HeightDropdown";
import { Button } from "../Button";
import { WeightDropdown } from "../Inputs/WeightDropdown";
import { SexDropdown } from "../Inputs/SexDropdown";

export const InfoForm = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="font-bold">Onboarding Complete!</p>
      <HeightDropdown
        onChange={(feet, inches) =>
          console.log(`Selected: ${feet} ft ${inches} in`)
        }
      />
      <WeightDropdown
        onChange={function (weight: string): void {
          console.log(`Selected: ${weight} lb`);
        }}
      />
      <SexDropdown
        onChange={function (sex: string): void {
          console.log(`Selected: ${sex}`);
        }}
      />
      <TextInput placeholder={"Email Address"} />
      <TextInput placeholder={"Password"} />
      <Button buttonText={"Submit"} />
    </div>
  );
};
