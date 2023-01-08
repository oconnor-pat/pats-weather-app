import React, { useState, useEffect } from "react";
import "./themetoggle.css";

function ToggleDarkTheme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
export default ToggleDarkTheme;
