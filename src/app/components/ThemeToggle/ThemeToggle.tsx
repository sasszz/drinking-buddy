"use client";

import { FormControlLabel, Switch } from "@mui/material";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <FormControlLabel
      control={<Switch defaultChecked onClick={toggleTheme} />}
      label={theme === "light" ? "Light Mode" : "Dark Mode"}
    />
  );
}
