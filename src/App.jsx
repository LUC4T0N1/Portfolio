import React, { useContext } from 'react';
import Intro from './interfaces/intro/Intro';
import About from './interfaces/about/About';
import Projects from './interfaces/projects/Projects';
import Contact from './interfaces/contact/Contact';
import Toggle from './interfaces/toggle/Toggle';
import  './app.css';
import { ThemeContext } from './infrastructure/context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#0A1416" : "white",
      color: darkMode && "white",

    }}>
       <Toggle/>
       <Intro/>
       <About/>
       <Projects/> 
       <Contact/>
    </div>
  )
}

export default App;