import './About.css';
import ME from '../../assets/img/me.PNG';
import { ThemeContext } from "../../infrastructure/context";
import { useContext } from "react";
import {useTranslation} from 'react-i18next';
import AboutCards from "./About_Cards";

function About() {
  const theme =  useContext(ThemeContext);
  const {t} = useTranslation()
  return (
      <div className="about" style={{ background: theme.state.darkMode ?   "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(12, 9, 10))" : "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(252, 192, 213))" }}>
        <div className='about-left'>
          <div className='about-background'></div>
          <div className='about-card bg'></div>
          <div className='about-card'>
            <img 
            src={ME}
            className='me-img'
            alt='Me'
            />
          </div>
        </div>
        <div className='about-right'>
          <h1 className='about-title'>{t('about_me')}</h1>
          <p className='about-content'>
            {t('about_me_p1')}
          </p>
          <p className='about-content'>
            {t('about_me_p2')}
          </p>
          <p className='about-content'>
            {t('about_me_p3')}
          </p>
          <AboutCards/>
        </div>
      </div>
  );
}

export default About;
