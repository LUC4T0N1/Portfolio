import {useTranslation} from 'react-i18next';
import './Contact.css';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons' 

function Contact() {
  const {t} = useTranslation()
  return (
    <div className="contact" id='contact'>
     <div className='contact-background'/>
       <div className='contact-wrapper'>
         <div className='contact-left'>
          <h1 className='contact-title'>{t('my_contacts')}</h1>
          {/* add */}
         </div>
         <div className='contact-right'>
            <p className='contact-desc'>
            {t('contact_desc')}
            </p>
            <ContactForm/>
         </div>
     </div>
    </div>
  );
}

export default Contact;
