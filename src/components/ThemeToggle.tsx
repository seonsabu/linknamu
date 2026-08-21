"use client";

import { SunIcon, MoonIcon } from "./icons";

const STORAGE_THEME = "linknamu_theme";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_THEME, next);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="다크모드 전환">
      <SunIcon className="icon-sun" />
      <MoonIcon className="icon-moon" />
    </button>
  );
}
