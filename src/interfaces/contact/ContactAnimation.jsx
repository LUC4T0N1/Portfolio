import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./ContactAnimation.css";

function ContactAnimation() {
  const { t } = useTranslation();
  return (
    <div className="loader">
      <a
        href={
          i18n.language === "en" ? "assets/Resume.pdf" : "assets/Curriculo.pdf"
        }
        download
        style={{ "--i": 3 }}
      >
        {t("resume")}
        <i>
          <FontAwesomeIcon
            icon={faDownload}
            className="icon-animation"
          ></FontAwesomeIcon>
        </i>
      </a>
      <a
        href="https://github.com/LUC4T0N1"
        target="_blank"
        style={{ "--i": 2 }}
        rel="noreferrer"
      >
        GITHUB
        <i>
          <FontAwesomeIcon
            icon={faGithub}
            rel="noreferrer"
            className="icon-animation"
          ></FontAwesomeIcon>
        </i>
      </a>
      <a
        href="https://www.linkedin.com/in/lucas-moniz-de-arruda/"
        rel="noreferrer"
        target="_blank"
        style={{ "--i": 1 }}
      >
        LINKEDIN
        <i>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icon-animation"
          ></FontAwesomeIcon>
        </i>
      </a>
    </div>
  );
}

export default ContactAnimation;
