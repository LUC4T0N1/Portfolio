import "./NavBar.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import Toggle from "../toggle/Toggle"; 
import Languages from '../languages-drop-down/Languages';



const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-menu" id="nav-menu">
        <ul className={isMobile? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#exp" className="nav-link">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Resume</a>
          </li>
          <li className="nav-item" id="last">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        <div>
          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FontAwesomeIcon icon={faTimes} className='fas fa-times'></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faBars} className='fas fa-bars'></FontAwesomeIcon>
            )}
          </button>
        </div>
      </div>
      <Languages/>
      <Toggle/>
    </nav>
  )
}

export default NavBar