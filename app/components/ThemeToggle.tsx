"use client";

import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 hover:text-blue-700 hover:bg-orange-500 transition-all text-2xl cursor-pointer rounded p-1"
    >
      <MdOutlineDarkMode size={22} />
    </button>
  );
};

export default ThemeToggle;
