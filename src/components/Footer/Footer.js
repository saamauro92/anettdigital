import React, { useState } from 'react';
import './Footer.css';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {

  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';


const Footer = () => {


  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



  const onSubmit = async (data) => {

    const { name, surname, email, message } = data;

    try {
      setLoading(true);

      const templateParams = {
        name,
        surname,
        email,
        message
      };
      await emailjs.send(
        "smtpout.secureserver.net",
        "template_tkxdm7m",
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }


  }


  const toastifySuccess = () => {
    setLoading(false);
    toast('Thank you! Your message has been sent.', {
      position: 'bottom-right',
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success Toastify__toast--success',
      toastId: 'notifyToast',


    });
  };




  return (
    <div className='footer-container'>


      <form className="form" id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>

        <h2>Contact us </h2>
        <p type="Name:">
          <input type="text" name="name"
            {...register('name', {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 40,
                message: "Please, introduce at least 40 characters."
              }
            })}
          ></input>


        </p>
        {errors.name && <span> {errors.name.message}</span>}

        <p type="Email:">
          <input type="email" name="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}

          ></input></p>
        {errors.email && (<span> Please enter a valid email address</span>)}



        <p type="Message:"> <textarea type="Mensaje:"
          {...register("message", { required: true })}

          name="message"></textarea > </p>
        {errors.message && <span> Message cannot exceed 75 characters' </span>}


        <button className="form-btn" type="submit">
          {loading ? <div className="form-btn-loading"> </div> : <> Send </>}
        </button>

      </form>
      <ToastContainer


      />


      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Anett Digital
            </Link>
          </div>
          <small className='website-rights'>Anett Digital © 2022</small>
          <div className='social-icons'>

            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>

            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;