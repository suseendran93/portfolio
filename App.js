import "./App.css";
import React, { useContext } from "react";
import NavbarHeader from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme ? "App-dark" : "App"}`}>
      <NavbarHeader />
    </div>
  );
};

export default App;
