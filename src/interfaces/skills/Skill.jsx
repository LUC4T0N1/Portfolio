import './Skill.css';

function Skill({img, name, level}) {
  return (
      <div className='skill-box'>
        <div className={ level === 'basic' ? 'skill-title-basic' : 'skill-title-advanced'}>
          <div className={ level === 'basic' ? 'img-basic' : 'img-advanced'}>
            <img 
          src={require(`../../assets/img/skills/${img}.png`)}
          className={ level === 'basic' ? 'skill-icon-basic' : 'skill-icon-advanced'}
          alt={name}
          />
          </div>
          <h3>{name}</h3>
        </div>
        {/* <p>{description}</p> */}
      </div>
      
  );
}

export default Skill;
