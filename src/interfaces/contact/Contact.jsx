import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact">
     <div className='contact-background'></div>
       <div className='contact-wrapper'>
         <div className='contact-left'>
          <h1 className='contact-title'>Let's discuss your project</h1>
          <div className='contact-info'>
            <div className="contact-info-item">
              {/* icone de telefone*/}
              (+55) 11 992120423
            </div>
            <div className="contact-info-item">
              {/* icone de email */}
              lucas_moniz@hotmail.com
            </div>
          </div>
         </div>
         <div className='contact-right'>
          <p className='contact-desc'>
            <b>What's your story?</b> Get in touch. Always freelancing if the reight project comes along
          </p>
          <ContactForm/>
         </div>
       </div>
    </div>
  );
}

export default Contact;
