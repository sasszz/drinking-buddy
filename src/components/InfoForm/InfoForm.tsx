"use client";

import React, { useState } from "react";
import { TextInput } from "../Inputs";
import { HeightDropdown } from "../Inputs/HeightDropdown";
import { Button } from "../Button";
import { WeightDropdown } from "../Inputs/WeightDropdown";
import { SexDropdown } from "../Inputs/SexDropdown";
import { Password } from "../Inputs/Password";
import { useRouter } from "next/navigation";

export const InfoForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    sex: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    const errorMessages: string[] = [];

    // if (!formData.height) errorMessages.push("Height is required.");
    // if (!formData.weight) errorMessages.push("Weight is required.");
    // if (!formData.sex) errorMessages.push("Sex is required.");

    if (!formData.email) {
      errorMessages.push("Email is required.");
    } else if (!validateEmail(formData.email)) {
      errorMessages.push("Invalid email format.");
    }

    if (!formData.password) {
      errorMessages.push("Password is required.");
    } else if (formData.password.length < 9) {
      errorMessages.push("Password must be at least 9 characters long.");
    }

    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      console.log("Form submitted:", formData);

      router.push("/home");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Enter your information to get started:</p>
      <HeightDropdown
        onChange={(feet, inches) =>
          setFormData((prev) => ({
            ...prev,
            height: `${feet} ft ${inches} in`,
          }))
        }
      />
      <WeightDropdown
        onChange={(weight) => setFormData((prev) => ({ ...prev, weight }))}
      />
      <SexDropdown
        onChange={(sex) => setFormData((prev) => ({ ...prev, sex }))}
      />
      <TextInput
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Password
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <Button buttonText="Submit" onClick={handleSubmit} />
      {errors.length > 0 && (
        <ul className="text-red-500 mt-2">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}{" "}
    </div>
  );
};
