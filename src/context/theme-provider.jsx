import React, { createContext, useState } from "react";
import Button from "../components/button";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <div className={`flex flex-col w-[100vw] min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
