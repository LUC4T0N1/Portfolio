import './About_Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBriefcase, faFolderOpen, faAddressBook } from '@fortawesome/free-solid-svg-icons' 
/* import { ThemeContext } from "../../infrastructure/context";
import { useContext } from "react";
import {useTranslation} from 'react-i18next'; */

function AboutCards() {
/*   const theme =  useContext(ThemeContext);
  const {t} = useTranslation() */
  return (
      <div className="cards" /* style={{ background: theme.state.darkMode ?   "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(12, 9, 10))" : "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(252, 192, 213))" }} */>
          <a href="#skills"className='card'>
           <span>SKILLS</span>
           <FontAwesomeIcon icon={faLaptopCode} className='icon'></FontAwesomeIcon>
          </a>
          <a href="#exp"className='card'>
           <span>EXPERIENCE</span>
           <FontAwesomeIcon icon={faBriefcase} className='icon'></FontAwesomeIcon>
          </a>
          <a href="#projects" className='card'>
            <span>PROJECTS</span>
            <FontAwesomeIcon icon={faFolderOpen} className='icon'></FontAwesomeIcon>
          </a>
          <a href="#contact" className='card'>
           <span>CONTACT</span> 
           <FontAwesomeIcon icon={faAddressBook} className='icon'></FontAwesomeIcon>
          </a>
      </div>
  );
}

export default AboutCards;
