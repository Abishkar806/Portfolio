import React from 'react';
import "./works.css";
import image1 from"../../assets/img1.webp";
import image2 from"../../assets/img2.webp";
import image3 from"../../assets/img3.webp"; 
import image4 from"../../assets/img4.webp";
import image5 from"../../assets/img5.webp";       
import image6 from"../../assets/img6.webp";   

function Works() {
  return (
    
      <section id='works'>
        <h2 className='workstitle'> My Portfolio</h2>
        <span className='worksDesc'>I takep pride in paying attention to the smallest details and making sure that my work in pixel perfect. I excited to bring my  skills and experience to help business achieve their goods and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={image1} alt='work1' className='worksImg' />
            <img src={image2} alt='work2' className='worksImg'/>
            <img src={image3} alt='work3' className='worksImg'/>
            <img src={image4} alt='work4' className='worksImg'/>
            <img src={image5} alt='work5' className='worksImg'/>
            <img src={image6} alt='work6' className='worksImg'/>

        </div>
        <button className="workBtn">See More</button>
      </section>
    
  )
}

export default Works;
