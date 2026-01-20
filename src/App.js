import "./App.css";
import React, { useContext, useEffect } from "react";
import NavbarHeader from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  const { theme } = useContext(ThemeContext);
    useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <div className={`${theme ? "app-dark" : "app-light"}`}>
      <NavbarHeader />
      <BackToTop />
    </div>
  );
};

export default App;
