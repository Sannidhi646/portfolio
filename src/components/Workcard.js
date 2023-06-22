import "./Workcardstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const Workcard = (props) => {
  // const sa="https://www.google.com";
  return (
    <div className="work-container">
        <div className="project-card">
                <img src={props.imgsrc} alt="img" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p className="description">{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                      
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Workcard
