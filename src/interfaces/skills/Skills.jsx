import './Skills.css';
import {frontEndSkills, backEndSkills, tools} from './my-skills'
import Skill from './Skill';
import {useState} from 'react';

function Skills() {

  const [option, setOption] = useState('frontEnd')

  let skills;
  if (option === 'frontEnd') {
    skills = frontEndSkills.map(item=>(
      <Skill key={item.id} img={item.img} name = {item.name} level = {item.level}/>));
  } else if (option === 'backEnd') {
    skills = backEndSkills.map(item=>(
      <Skill key={item.id} img={item.img} name = {item.name} level = {item.level}/>));
  } else{
    skills = tools.map(item=>(
      <Skill key={item.id} img={item.img} name = {item.name} level = {item.level}/>));
  }

  return (
      <div className="skills" id='skills'>
        <div className='skills-header'>
          <h1>My skills</h1>
        </div>
        <div className='skills-selector'>
          <div className='skills-type'>
            <button className={option === 'frontEnd' ? 'skills-type-selected' : 'skills-type-non-selected'} onClick={() => setOption('frontEnd')}>Front-End</button>
          </div>
          <div className='skills-type'>
            <button className={option === 'backEnd' ? 'skills-type-selected' : 'skills-type-non-selected'} onClick={() => setOption('backEnd')}>Back-End</button>
          </div>
          <div className='skills-type'>
            <button className={option === 'tools' ? 'skills-type-selected' : 'skills-type-non-selected'} onClick={() => setOption('tools')}>Tools</button>
          </div>
        </div>
        <div className='skills-container'>
          {skills}
        </div>
      </div>
  );
}

export default Skills;
