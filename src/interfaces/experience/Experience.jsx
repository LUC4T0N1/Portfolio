import './Experience.css';
import { ExperienceDataEN, ExperienceDataPT } from './experienceData';
import {useTranslation} from 'react-i18next';
import i18n from "i18next";
import ExperienceCard from './ExperienceCard';

function Experience() {
  const {t} = useTranslation()
  return(
          <div id='exp' className='exp'>
            <section className ="exp-title">
              Experience And Education
            </section>
            <div className="container">
              <div className="timeline">
                <ul>
                    {(i18n.language === 'en') ?  ExperienceDataEN.map(item=>(
                      <ExperienceCard key={item.id} date={item.date} heading = {item.heading} content = {item.content} />
                    )) : ExperienceDataPT.map(item =>(
                      <ExperienceCard key={item.id} date={item.date} heading = {item.heading} content = {item.content}/>
                    ))}
                </ul>
              </div>
            </div>
          </div>
  )
}

export default Experience;
