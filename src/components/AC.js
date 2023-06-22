import React from 'react';
// import HorizontalScroll from 'react-horizontal-scrolling'
import "./AC.css"
import "./ProjectWorkstyle.css";
import p1 from "../asests/p1.png";
import p3 from "../asests/hackthon price pic.jpeg"
import p4 from "../asests/0001.jpg"
import p5 from "../asests/Screenshot 2023-04-11 213644.png"
const AC = () => {

  // const scrollRef = useRef(null);

  // const handleLeftScroll = () => {
  //   scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  // };

  // const handleRightScroll = () => {
  //   scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  // };
  // ref={scrollRef}
  return (

    <div className='outerdiv'>
      <div className='head'>
        <h4>Coding</h4>
      </div>
      
      <div className="horizontal-scroll-container">

        <div className="horizontal-scroll">
          <div className='contentt'>
            <div className='project'>
              <div className="left">
                <h1>Foodle</h1>
                <p>Foodle was developed during a company-specific hackathon and won 3rd place. The project functions similarly to Zomato, assigning the nearest delivery person to a customer's order. The application streamlines the food delivery process, making it more efficient and convenient for both customers and delivery personnel.</p>
              </div>
              <div className="right">


                <img src={p3} className="img" alt="he"></img>



              </div>
            </div>
            
            
          </div>
          <div className='contentt'>
            <div className='project '>
              <div className="left">
                <h1>GoCargo</h1>
                <p>GoCargo is a project developed during a 2021 hackathon. It aims to connect small businesses with larger ones for goods transportation. By utilizing the platform, businesses can find reliable transportation for their products, making it easier to move goods across distances. The project won an honorable mention at the hackathon.</p>
              </div>
              <div className="right">
                <img src={p4} className="img" alt="he"></img>
              </div>
              
            
            </div>
            
          </div>
          <div className='contentt'>
            <div className='project '>
              <div className="left">
                <h1>CodeChef</h1>
                <p>I have achieved a rating of 1296 and solved over 300 problems on Codechef, demonstrating my proficiency in competitive coding. My ability to solve complex problems under time constraints has honed my skills and made me an efficient problem solver.</p>
              </div>
              <div className="right">
                <img src={p5} className="img" alt="he"></img>
              </div>
              
            
            </div>
            
          </div>


        </div>


      </div>



    </div >
  )
}

export default AC
