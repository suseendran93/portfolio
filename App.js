import "./App.css";
import NavbarHeader from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import Skills from "./components/Skills";
const App = () => {
  return (
    <div className="App">
      <NavbarHeader />
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes> */}
    </div>
  );
};

export default App;
