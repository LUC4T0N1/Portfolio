import React, { useContext } from "react";
import "./app.css";
import { ThemeContext } from "./infrastructure/context";
import About from "./interfaces/about/About";
import Contact from "./interfaces/contact/Contact";
import Experience from "./interfaces/experience/Experience";
import Intro from "./interfaces/intro/Intro";
import NavBar from "./interfaces/nav-bar/NavBar";
import Projects from "./interfaces/projects/Projects";
import Skills from "./interfaces/skills/Skills";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "#e1e8eb",
        color: darkMode && "white",
        minWidth: "280px",
      }}
    >
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
