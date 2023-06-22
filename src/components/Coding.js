import "./Codingstyle.css"
import React from 'react'
import p1 from "../asests/p1.png"
const Coding = () => {
  return (
    <div className="out" id="coding">
     <div className='project'>
                <div className="left">
                    <h1>Foodle</h1>
                    <p>Check the location of the "Projectsworks" component relative to the file that is importing it. If the import path is incorrect, it may be because the file is not located where you think it is. Double-check the file structure of your project and ensure that the import path is correct.</p>
                </div>
                <div className="right">


                    <img src={p1} className="img" alt="he"></img>



                </div>
            </div>
            <div className='project project1'>
                <div className="left">
                    <h1>Foodle</h1>
                    <p>Check the location of the "Projectsworks" component relative to the file that is importing it. If the import path is incorrect, it may be because the file is not located where you think it is. Double-check the file structure of your project and ensure that the import path is correct.</p>
                </div>
                <div className="right">


                    <img src={p1} className="img" alt="he"></img>

                </div>
            </div>
            <div className='project project1'>
                <div className="left">
                    <h1>Foodle</h1>
                    <p>Check the location of the "Projectsworks" component relative to the file that is importing it. If the import path is incorrect, it may be because the file is not located where you think it is. Double-check the file structure of your project and ensure that the import path is correct.</p>
                </div>
                <div className="right">
                    <img src={p1} className="img" alt="he"></img>
                </div>
            </div>
    </div>
  )
}

export default Coding
