import './Intro.css';
import {useTranslation} from 'react-i18next';
import { ThemeContext } from "../../infrastructure/context";
import { useContext } from "react";

function Intro() {
  const {t} = useTranslation()
  const theme =  useContext(ThemeContext);
  return (
    <div className="intro">
          <div className='intro-background' style={{ background: theme.state.darkMode ?   "linear-gradient(to left, rgb(12, 9, 10), rgb(190, 31, 79))" : "linear-gradient(to left, rgb(114, 24, 51), rgb(252, 192, 213))" }}></div>
     <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>{t('hello')}</h2>
          <h1 className='intro-name'>Lucas Moniz de Arruda</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
             <div className='intro-title-item'>{t('job')}</div>
             <div className='intro-title-item'>{t('bcc')}</div>
             <div className='intro-title-item'>{t('bct')}</div>
            </div>
          </div>
          <div className='intro-description'>
          {t('intro_description')}
          </div>
        </div>
     </div>
     <div className='intro-right'/>
    </div>
  );
}

export default Intro;
