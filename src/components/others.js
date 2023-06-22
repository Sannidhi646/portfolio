import React from "react";
import "./AC.css";
import "./others.css";

import p2 from "../asests/chess price pic.jpg";

const others = () => {
  return (
    <div>
      <div className="others head">
        <h4>Curricular activities</h4>
      </div>

      <div className="container">
        <div className="project1 ">
          <div className="left1">
            <h1>Chess</h1>
            <p>
              I am a talented chess player who has excelled both in high school
              and in college. I have been selected twice to the state level in
              high school and twice to the interzonal level during my BTech
              studies. In one zonal level competition, my team placed 3rd
              overall.
            </p>
          </div>
          <div className="right1">
            <img src={p2} className="img" alt="he"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default others;
