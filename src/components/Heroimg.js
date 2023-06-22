import "./Heroimgstyle.css";
import React from 'react'
import Introimg from "../asests/intro-bg.png"
import { Link } from "react-router-dom";
import me from "../asests/my.png";
import resume from "../asests/SANNIDHI's Resume (2).pdf";
import { FaDownload } from "react-icons/fa";
import Typed from 'react-typed';
const Heroimg = () => {
 
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-bg" src={Introimg} alt="Introimg"></img>
      </div>
      <div className="content">
        <div className="left">
        <p>Hello guys!</p>
        <h2>I am Sannidhi</h2>
        {/* <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                /> */}
        
       <strong> <Typed className="typed"
                strings={[
                    'A Web-developer',
                    'A Competitive Programmer',
                    'A Sportsman']}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={1000}
                    
                    loop >
                    
                </Typed></strong>
        
        <div className="resume">
        <a href={resume} download="SANNIDHI's Resume" className="btn doen"  >Resume <FaDownload size={15} ></FaDownload></a>
          <Link to="/contact" className="btn btn-light">contact</Link>
          </div>
          </div>
          <div className="right">
            <img src={me} alt="my" className="my"></img>
          </div>
        
      </div>
    </div>
  )
}

export default Heroimg
