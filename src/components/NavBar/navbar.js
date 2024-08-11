import React, {useState}from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/Contact.png";
import{ Link } from "react-scroll";
import menu from "../../assets/menu.png";
// import { useState } from "react";

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <div>
      <nav className="navbar">
        <img className="logo" src={logo} alt='logo' />
        <div className="desktopMenu">
          <Link className="desktopMenuListItem" activeClass='active' to="intro" spy={true} offset={-100} smooth={true} duration={500}>Home</Link>
          <Link className="desktopMenuListItem" activeClass='active' to="skills" spy={true} offset={-75} smooth={true} duration={500}>About</Link>
          <Link className="desktopMenuListItem" activeClass='active' to="works" spy={true} offset={-70} smooth={true} duration={500}>Portfolio</Link>
          <Link className="desktopMenuListItem" activeClass='active' to="clients" spy={true} offset={-69} smooth={true} duration={500}>Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }} >
            <img  className="desktopMenuImg" src={contactImg} alt=" contact"  />Contact Me</button>


            <img  src={menu} className="mobMenu"  alt='Menu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? "flex" :"none"}}>
          <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass='active' to="intro" spy={true} offset={-100} smooth={true} duration={500}>Home</Link>
          <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass='active' to="skills" spy={true} offset={-75} smooth={true} duration={500}>About</Link>
          <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass='active' to="works" spy={true} offset={-70} smooth={true} duration={500}>Portfolio</Link>
          <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass='active' to="clients" spy={true}offset={-69} smooth={true} duration={500}>Clients</Link>
          <Link className="ListItem" onClick={()=>setShowMenu(false)} activeClass='active' to="contact" spy={true} offset={-50} smooth={true} duration={500}>contact</Link>
        </div>
          </nav>
          </div>
  )
}

export default Navbar;
