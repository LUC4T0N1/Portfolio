import { useTranslation } from "react-i18next";
import "./Contact.css";
import ContactAnimation from "./ContactAnimation";
import ContactForm from "./ContactForm";
function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact" id="contact">
      <div className="contact-background" />
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">{t("my_contacts")}</h1>
          <div className="animation">
            <ContactAnimation />
          </div>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
