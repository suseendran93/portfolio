import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const DarkTheme = (theme) => {
    setTheme(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, DarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
