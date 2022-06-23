import './ExperienceCard.css';

function ExperienceCard({date, heading, content}) {
  return(
      <li>
        <div className="timeline-content">
          <h3 className="date">{date}</h3>
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </li>
  )
}

export default ExperienceCard;
