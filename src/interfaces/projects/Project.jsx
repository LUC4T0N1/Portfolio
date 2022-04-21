import './Project.css';

function Project({img, link}) {
  return (
    <div className="project">
      <div className='project-header'>
        {/* site: gofullpage */}
        <h1 className='project-title'>
            Title
          </h1>
          <p className='project-desc'>
          description of the project
          </p>
          <div className='project-browser'>
            <div className='project-circle'></div>
            <div className='project-circle'></div>
            <div className='project-circle'></div>
          </div>
        </div>
        <a href={link} >
          <img src={img} alt="" className='project-img'/>
        </a>
    </div>
  );
}

export default Project;
