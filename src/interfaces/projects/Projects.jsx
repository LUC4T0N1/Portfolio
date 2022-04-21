import './Projects.css';
import Project from './Project';
import {projects} from './projects-data.js';

function Projects() {
  return (
    <div className="projects">
      <h1 className='projects-title'>
        Here are my projects.....
      </h1>
      <p className='projects-general-desc'>
        klçjahndiohasiodh asiodaioshjdoiasjd doiahsdiohajsodih aosdhiodasjid daoisdioashjdio ioashjdoiahjsiodj
        d doiahsdiohajsodih aosdhiodasjid daoisdioashjdio ioashjdoiahjsiodj
      </p>
      <div className='projects-list'>
        {projects.map(item=>(
          <Project key={item.id} img={item.img} link = {item.link}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
