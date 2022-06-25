import React, { useContext } from 'react';
import NavBar from './interfaces/nav-bar/NavBar'
import Intro from './interfaces/intro/Intro';
import About from './interfaces/about/About';
import Experience from './interfaces/experience/Experience'
import Skills from './interfaces/skills/Skills'
import Projects from './interfaces/projects/Projects';
import Contact from './interfaces/contact/Contact';
import  './app.css';
import { ThemeContext } from './infrastructure/context';
import Toggle from "./interfaces/toggle/Toggle"; 
import Languages from './interfaces/languages-drop-down/Languages';
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#0A1416" : "#e1e8eb",
      color: darkMode && "white",

    }}>
      <NavBar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/> 
      <Contact/>
    </div>
  )
}

export default App;