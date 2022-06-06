import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Intro from './interfaces/intro/Intro';
import About from './interfaces/about/About';
import Projects from './interfaces/projects/Projects';
import Contact from './interfaces/contact/Contact';
import Toggle from './interfaces/toggle/Toggle';
import { ThemeProvider } from './infrastructure/context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


