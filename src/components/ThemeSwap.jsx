import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeSwap = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeSwap = (value) => {
    setIsDark(value);
  };

  const handleTheme = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'luxury' : 'retro'
  }, [isDark])

  if (isDark) {
    return (
      <button className="btn btn-circle" onClick={handleTheme}>
        <Sun />
      </button>
    );
  }

  return (
    <button className="btn btn-circle" onClick={handleTheme}>
      <Moon />
    </button>
  );
};

export default ThemeSwap;
