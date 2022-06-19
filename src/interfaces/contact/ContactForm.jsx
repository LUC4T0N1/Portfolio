import { useRef, useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import {useTranslation} from 'react-i18next';

function ContactForm() {
  const {t} = useTranslation()
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [done, setDone] = useState(false);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
  });

  const formRef = useRef();
  const onSubmit = () => {
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
    <div className="contact-form">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register('user_name', { required: t('user_name_required') })}/>
        {errors.user_name? <p className='message'>{errors.user_name.message}</p> : ""}
        <input placeholder="Subject" {...register('user_subject', { required: t('user_subject_required') })}/>
        {errors.user_subject?<p className='message'>{errors.user_subject.message}</p> : ""}
        <input placeholder="Email" {...register('user_email', { required: t('user_email_required'), pattern: {
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message:  t('invalid_user_email')
      } })}/>
        {errors.user_email?<p className='message'>{errors.user_email.message}</p> : ""}
        <textarea placeholder="Message" rows="5" {...register('message', { required: t('message_required'), minLength: {value: 15, message: t('message_min_length')}})}></textarea>
        {errors.message?<p className='message'>{errors.message.message}</p> : ""}
        <button className='contact-button'>Submit</button>
        {done && "Thank you for your contact, i will answer your email as soon as possible!"}
        {!success && <p className='message'>Something went wrong.. please try again later</p>}
      </form>
    </div>
  );
}

export default ContactForm;
