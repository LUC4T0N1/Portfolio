import './Intro.css';

function Intro() {
  return (
    <div className="intro">
     <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>Hello, my name is</h2>
          <h1 className='intro-name'>Lucas Moniz de Arruda</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
             <div className='intro-title-item'>Full-Stack Web Developer</div>
             <div className='intro-title-item'>Bachelor of Computer Science</div>
            </div>
          </div>
          <div className='intro-description'>
            I develop full web softwares from Front-End to Back-End using React, Redux, Java, Quarkus and Mysql
          </div>
        </div>
     </div>
     <div className='intro-right'>
        <div className='intro-background'></div>
     </div>
    </div>
  );
}

export default Intro;
