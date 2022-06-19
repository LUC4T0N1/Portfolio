import './About.css';
import ME from '../../assets/img/me.PNG';
import { ThemeContext } from "../../infrastructure/context";
import { useContext } from "react";

function About() {
  const theme =  useContext(ThemeContext);
  return (
      <div className="about" style={{ background: theme.state.darkMode ?   "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(12, 9, 10))" : "linear-gradient(to bottom right, rgb(114, 24, 51), rgb(252, 192, 213))" }}>
        <div className='about-left'>
          <div className='about-background'></div>
          <div className='about-card bg'></div>
          <div className='about-card'>
            <img 
            src={ME}
            className='me-img'
            />
          </div>
        </div>
        <div className='about-right'>
          <h1 className='about-title'>About Me</h1>
          <p className='about-content'>
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
          </p>
          <p className='about-content'>
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
          </p>
          <p className='about-content'>
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
            ilabsghudygba digbua sdihbak sjdbaks dbnasklb dnkla sjhndç lahnidkaçsldk
   
          </p>
        </div>
      </div>
  );
}

export default About;
