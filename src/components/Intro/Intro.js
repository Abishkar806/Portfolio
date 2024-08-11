import React from 'react';
import "./intro.css";
import myself from "../../assets/myself.png";
import { Link } from 'react-scroll';
import hire from "../../assets/hire.png";

const Intro = () => {
  return (
    <div >
      <section id='intro'>
        <div className="introcontent">
            <span className='hello'> Hello,</span>
            <span className='inrtroText'>I'm<span className='introname' > Abishkar</span> <br />Web Developer </span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br/>visually applealing and user friendly websites.</p>
            <Link to="hire" smooth={true} duration={500}><button className='btn'><img className='hireimg' src={hire} alt='Hire Me'/> Hire Me</button></Link>

        </div>
        <img className='myself' src={myself} alt='Profile' />
      </section>
    </div>
  )
}

export default Intro;
