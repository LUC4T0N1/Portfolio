import './Projects.css';
import Project from './Project';
import {projects} from './projects-data.js';
import {projetos} from './projetos-data.js';
import {useTranslation} from 'react-i18next';
import i18n from "i18next";

function Projects() {
  const {t} = useTranslation()

  return (
    <div className="projects">
      <h1 className='projects-title'>
      {t('projects')}
      </h1>
      <p className='projects-general-desc'>
      {t('projects_general_desc')}
      </p>
      <div className='projects-list'>
        {(i18n.language === 'en') ?  projects.map(item=>(
          <Project key={item.id} img={item.img} link = {item.link} title = {item.title} description = {item.description}/>
        )) : projetos.map(item=>(
          <Project key={item.id} img={item.img} link = {item.link} title = {item.title} description = {item.description}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
