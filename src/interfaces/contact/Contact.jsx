import { useRef, useEffect, useState  } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {

  const [done, setDone] = useState(false);
  const [success, setSuccess] = useState(true);

  const formRef = useRef();

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE,process.env.REACT_APP_EMAILJS_TEMPLATE, formRef.current).then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
  }

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
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" placeholder="Message" rows="5"></textarea>
            <button>Submit</button>
            {done && "Thank you for your contact, i will answer your email as soon as possible!"}
            {!success && <p className="error-email">Something went wrong.. please try again later</p>}
          </form>
         </div>
       </div>
    </div>
  );
}

export default Contact;
