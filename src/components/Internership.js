import React from "react";
import "./AC.css";
import "./ProjectWorkstyle.css";
import p1 from "../asests/logo3-removebg-preview.png";
const Internership = () => {
  return (
    <div>
      <div className="head">
        <h4>Internership</h4>
      </div>

      <div className="horizontal-scroll-container eee">
        <div className="horizontal-scroll">
          <div className="contentt">
            <div className="project ">
              <div className="left">
                <h1>Prafal Agro</h1>
                <p>
                  I am currently interning at Prafal Agro, an agritech company,
                  as an e-commerce developer. My role involves developing and
                  maintaining the company's online platform and optimizing the
                  user experience for customers.
                </p>
              </div>
              <div className="right">
                <img src={p1} className="img" alt="he"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internership;
