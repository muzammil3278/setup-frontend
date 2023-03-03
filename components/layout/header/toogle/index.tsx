import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import useColorMode from "../../../../hooks/useColorMode";

export default function index() {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const [colorMode, setColorMode] = useColorMode();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  return (
    <>
      <div
        className="dark:text-gray-200 text-gray-200 md:ml-0 ml-3"
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      >
        <DarkModeSwitch
          checked={isDarkMode} 
          onChange={toggleDarkMode}
          size={30}
        />
      </div>
    </>
  );
}
