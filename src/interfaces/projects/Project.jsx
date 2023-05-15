import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../infrastructure/context";
import "./Project.css";

function Project({
  img,
  link,
  tecnologies,
  github,
  youtube,
  title,
  description,
}) {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div
      className="project"
      id="about"
      style={{
        background: theme.state.darkMode
          ? "linear-gradient(to bottom right, rgb(12, 9, 10, 0.6), rgb(114, 24, 51, 0.8), rgb(12, 9, 10, 0.6))"
          : "linear-gradient(to bottom right,  rgb(114, 24, 51, 1), rgb(177, 102, 128, 1), rgb(114, 24, 51, 1))",
      }}
    >
      <div className="project-left">
        <div className="project-card">
          <img
            src={require(`../../assets/img/projects/${img}.png`)}
            className="project-img"
          />
        </div>
      </div>
      <div className="project-right">
        <h1 className="project-title">{title}</h1>
        <p className="project-content">{description}</p>
        <p className="tecnologies-used">
          {t("tec-used")}
          {tecnologies}
        </p>
        <div className="project-links">
          <div className="link">
            <a href={github} target="_blank" rel="noreferrer">
              {t("code")}
              <i>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icon"
                ></FontAwesomeIcon>
              </i>
            </a>
          </div>
          <div className="link">
            <a href={link} target="_blank" rel="noreferrer">
              {t("demo")}
              <i>
                <FontAwesomeIcon
                  icon={faPlay}
                  className="icon"
                ></FontAwesomeIcon>
              </i>
            </a>
          </div>
          <div className="link">
            <a href={youtube} target="_blank" rel="noreferrer">
              {t("youtube")}
              <i>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="icon"
                ></FontAwesomeIcon>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    /*     <div className="project">
      <div className='project-header'>
        <h1 className='project-title'>
            {title}
          </h1>
          <p className='project-desc'>
          {description}
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
    </div> */
  );
}

export default Project;
