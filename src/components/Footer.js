import React from 'react';
import "./Footerstyle.css";
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <div className='location'>
              <h4>
               <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                
                    Sri Rama Nilaya Kiradi<br></br>
                    <p>Kelabailu,Avarese Post</p>
                    <p>Udupi district and taluk</p>
                    <p>576223</p>
                    </h4>
                
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>6361348235</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>sannidhibhat4@gmail.com</h4>
            </div>
            </div>
            <div className='right'>
                <h4>Connect Me!</h4>
                <p>To connect with me on social media, please find me on my preferred platforms like Twitter, LinkedIn, or Facebook. You can easily search for me using my name and profile picture. Let's stay in touch and keep the conversation going!</p>
                  <div className='social'>
                  <NavLink to="https://www.facebook.com/Sannidhibhat646" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink> 
                    <NavLink to="https://www.instagram.com/sannidh_ibhat/" target="_blank" rel="noopener noreferrer"> <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                    <NavLink to="https://linkedin.com/in/sannidhi-bhat-4b7852202" target="_blank" rel="noopener noreferrer">  <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                    <NavLink to="https://github.com/Sannidhi646" target="_blank" rel="noopener noreferrer">  <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} /></NavLink>
                  </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
