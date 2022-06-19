import "./Languages.css"
import Globe from "../../assets/img/globe.png";
import i18n from "i18next";


const Languages = () => {

  const languages = [
    {
      code: 'pt',
      name: 'Portugês do Brasil',
      country_code: 'br'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    }
  ]

  return (
    <div className="dropdown">
      <button className="d-button"><img src={Globe} alt="" className="d-icon"/></button>
      <ul className="dropdown-content">
        {languages.map(({code, name, country_code}) => (
          <li key = {country_code}>
            <button className="dropdown-item" onClick={() => i18n.changeLanguage(code)}>
               <span className={`flag-icon flag-icon-${country_code}`}></span> 
              {name}
            </button>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default Languages