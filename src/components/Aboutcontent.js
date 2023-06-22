import "./Aboutcontentstyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import p1 from "../asests/p2"
import p2 from "../asests/p3"
const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>who Am I</h1>
        <p>I am a web developer and competitive coder, skilled in building websites and solving complex coding challenges.</p>
        <Link to="/contact"><button className="btn">contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={p1} className="img" alt="he"></img>
          </div>
          <div className="img-stack bottom">
            <img src={p2} className="img" alt="he"></img>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutcontent
