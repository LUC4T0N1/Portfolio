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
        <input placeholder={t('user_name_placeholder')} 
          {...register('user_name', { required: t('user_name_required') })}/>
          {errors.user_name? <p className='message'> {errors.user_name.message} </p> : ""}
        <input placeholder={t('subject_placeholder')} 
          {...register('user_subject', { required: t('user_subject_required') })}/>
          {errors.user_subject?
          <p className='message'> {errors.user_subject.message}</p> : ""}
        <input placeholder="Email" 
          {...register('user_email', { required: t('user_email_required'), pattern: {
         value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         message:  t('invalid_user_email')
      } })}/>
          {errors.user_email?<p className='message'>{errors.user_email.message}</p> : ""}
        <textarea placeholder={t('message_placeholder')} rows="5" {...register('message', { required: t('message_required'), minLength: {value: 15, message: t('message_min_length')}})}></textarea>
         {errors.message?<p className='message'>{errors.message.message}</p> : ""}
        <button className='contact-button'>{t('submit_button')}</button>
          {done && t('email_sent')}
          {!success && <p className='message'>{t('email_error')}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
