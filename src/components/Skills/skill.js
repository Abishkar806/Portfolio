import React from 'react';
import "./skill.css";
import UI from '../../assets/UI.png'
import react from '../../assets/react.png';
import web from '../../assets/web.png';

function Skill() {
  return (
    <div >
      <section id='skills'>
        <span className='skillTitle'>What I do<br /></span>
        <span className='skillDesc'>I am a skill and passionate web designer with experiencein creating visually applealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficientin HTML, CSS, JavaScripts, React Framework, PHP and MySQL as well as design software such as Figma ,Adobe Photoshop and Illustrator. </span>
        <div className='skillBars'>
            <div className='skillBar'  >
                <img src={UI} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> UI/UX Design </h2>
                    <p> I specialize in creating visually appealing and intuitive user interfaces that enhance the overall user experience. By focusing on user-centered design and responsive layouts, I ensure that every interaction is seamless and engaging across all devices.</p>
                </div>
            </div>  
            <div className='skillBar'  >
                <img src={web} alt="WebDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> Web Design</h2>
                    <p> I design websites that combine aesthetics with functionality to deliver engaging and intuitive user experiences. My approach ensures that each site is not only visually appealing but also optimized for smooth performance across all devices.</p>
                </div>
            </div>  
            <div className='skillBar'  >
                <img src={react} alt="React Develop" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>React Developer</h2>
                    <p>I build dynamic, high-performance web applications using React, ensuring responsive and interactive user experiences. My expertise in React’s ecosystem allows me to create scalable and maintainable code that enhances functionality and user engagement</p>
                </div>
            </div>    
        </div>
        

      </section>
    </div>
  )
}

export default Skill;
