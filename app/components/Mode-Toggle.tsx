"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-12 h-12 bg-[#f97316] text-white rounded-2xl flex items-center justify-center border-[3px] border-blue-900 dark:border-white shadow-lg transition-all active:scale-90 cursor-pointer"
      title="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <HiSun className="text-2xl text-yellow-300" />
      ) : (
        <HiMoon className="text-2xl text-white" />
      )}
    </button>
  );
}
