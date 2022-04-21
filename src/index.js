import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './interfaces/intro/Intro';
import About from './interfaces/about/About';
import Projects from './interfaces/projects/Projects';
import Contact from './interfaces/contact/Contact';
import  './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Intro/>
    <About/>
    <Projects/> 
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);


