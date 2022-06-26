import {useTranslation} from 'react-i18next';
import './ContactAnimation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

function ContactAnimation() {
  const {t} = useTranslation()
  return (
    <div className="loader">
      <a href='https://linkedin.com/in/lucas-moniz-de-arruda-637a29184' target="_blank" style={{ "--i": 2 }}>LINKEDIN
      <icon><FontAwesomeIcon icon={faGithub} className='icon'></FontAwesomeIcon></icon>
      </a>
      <a href='https://github.com/LUC4T0N1' target="_blank" style={{ "--i": 1 }}>GITHUB
        <icon><FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon></icon>
      </a>
    </div>
  );
}

export default ContactAnimation;
