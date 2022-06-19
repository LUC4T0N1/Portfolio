import './Intro.css';
import {useTranslation} from 'react-i18next';

function Intro() {
  const {t} = useTranslation()
  return (
    <div className="intro">
          <div className='intro-background'></div>
     <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>{t('hello')}</h2>
          <h1 className='intro-name'>Lucas Moniz de Arruda</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
             <div className='intro-title-item'>{t('job')}</div>
             <div className='intro-title-item'>Bachelor of Computer Science</div>
             <div className='intro-title-item'>Bachelor of Science and Technology</div>
            </div>
          </div>
          <div className='intro-description'>
            I develop full web softwares from Front-End to Back-End using React, Redux, Java, Quarkus and Mysql
          </div>
        </div>
     </div>
     <div className='intro-right'/>
    </div>
  );
}

export default Intro;
