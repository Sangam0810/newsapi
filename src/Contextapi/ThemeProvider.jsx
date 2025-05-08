import { useState } from "react";
import themeContext from "./ThemeContext";

const ThemeProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState("light");

  const lightMode = () => {
    setTheme("light");
  };

  const darkMode = () => {
    setTheme("dark");
  };

  return (
    <themeContext.Provider
      value={{  theme, setTheme, darkMode, lightMode }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
