import React from "react";

import "./AC.css";
import "./ProjectWorkstyle.css";

import p3 from "../asests/database sql.png";
import p4 from "../asests/ux tech talk.png";
import p5 from "../asests/participation certificate devapps.png";
const Certificates = () => {
  return (
    <div className="outerdiv">
      <div className="head">
        <h4>Certificates</h4>
      </div>

      <div className="horizontal-scroll-container">
        <div className="horizontal-scroll">
          <div className="contentt">
            <div className="project">
              <div className="left" >
                <h1>SQL Database</h1>
                <p>
                  In 2022, I participated in a hackathon that included an SQL
                  database competition. While I did not win, I received a
                  certificate of participation for attending the event.
                </p>
              </div>
              <div className="right">
                <img src={p3} className="img" alt="he"></img>
              </div>
            </div>
            
          </div>
          <div className="contentt">
            <div className="project ">
              <div className="left">
                <h1>UX-UI</h1>
                <p>
                  I received participation certificates for attending a UX and
                  UI talk held as part of a hackathon in 2022, demonstrating my
                  interest in user experience and interface design.
                </p>
              </div>
              <div className="right">
                <img src={p4} className="img" alt="he"></img>
              </div>
            </div>
          </div>
          <div className="contentt">
            <div className="project ">
              <div className="left">
                <h1>Hack Night</h1>
                <p>
                  In 2022, I participated in Hack Night, a hackathon event, and
                  received a certificate of participation. The event provided me
                  with valuable experience and exposure to new technologies and
                  programming concepts
                </p>
              </div>
              <div className="right">
                <img src={p5} className="img" alt="he"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
