import React, { useRef } from 'react';
import "./contact.css";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import facebook from "../../assets/facebookicon.png";
import linkedin from "../../assets/linkdenicon.png";
import github from "../../assets/githubicon.png";
import youtube from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jrqdjpe', 'template_wc2o8df', form.current, {
        publicKey: '9hne7nc6f1FrJ9odUk499'
      }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
      <div id='clients'>
        <h1 className='ContactPageTitle'> My Clients</h1>
        <p className='cientDesc'>
          Here are some of my clients who have supported me throughout my journey. Feel free to reach out if you have any questions or need further information.

        </p>
        <div className='ClientImgs'>
          <img src={client1} alt='ClientImgs' className='clientImg' />
          <img src={client2} alt='ClientImgs' className='clientImg' />
          <img src={client3} alt='ClientImgs' className='clientImg' />
          <img src={client4} alt='ClientImgs' className='clientImg' />
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'> Please fill out the form below how to discuss any work opportunities. </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder=' Your Name' name='From_name' />
          <input type='email' className='email' placeholder=' Your Email' name='from_email' />
          <textarea className='msg' name="message" rows="5" placeholder=' Your Message' ></textarea>
          <button type='submit' value='send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href="https://www.facebook.com/abishkar.chapagain/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/abishkar-chapagain-895202256/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
            <a href="https://github.com/Abishkar806" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="link" />
            </a>
            <a href="https://www.youtube.com/@abishkarchapagain1" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" className="link" />
            </a>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
