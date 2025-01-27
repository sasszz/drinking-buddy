"use client";

import { useState, useEffect } from "react";
import { Switch } from "@base-ui-components/react/switch";

import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Switch.Root defaultChecked onClick={toggleTheme} className={styles.switch}>
      <Switch.Thumb className={styles.thumb} />
    </Switch.Root>
  );
};
