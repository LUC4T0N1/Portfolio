import {useTranslation} from 'react-i18next';
import './ContactAnimation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faDownload } from '@fortawesome/free-solid-svg-icons' 

function ContactAnimation() {
  const {t} = useTranslation()
  return (
    <div className="loader">
      <a href="assets/work.png" download style={{ "--i": 3 }}>{t('resume')}
       <icon><FontAwesomeIcon icon={faDownload} className='icon'></FontAwesomeIcon></icon>
      </a>
      <a href='https://linkedin.com/in/lucas-moniz-de-arruda-637a29184' target="_blank" style={{ "--i": 2 }}>GITHUB
      <icon><FontAwesomeIcon icon={faGithub} rel="noreferrer" className='icon'></FontAwesomeIcon></icon>
      </a>
      <a href='https://github.com/LUC4T0N1' rel="noreferrer" target="_blank" style={{ "--i": 1 }}>LINKEDIN
        <icon><FontAwesomeIcon icon={faLinkedin} className='icon'></FontAwesomeIcon></icon>
      </a>
    </div>
  );
}

export default ContactAnimation;
