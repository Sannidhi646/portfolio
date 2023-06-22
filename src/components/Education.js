import React from 'react'
import "./AC.css"
    import "./ProjectWorkstyle.css";
    
    import p3 from "../asests/GPUC.jpg"
    import p4 from "../asests/PUC.jpg"
    import p5 from "../asests/BTECHjpg.jpg"

const Education = () => {
  return (
    
    
   
     
        <div className='outerdiv'>
          <div className='head'>
            <h4>Education</h4>
          </div>
          
          <div className="horizontal-scroll-container">
    
            <div className="horizontal-scroll">
              <div className='contentt'>
                <div className='project'>
                  <div className="left">
                    <h1>High School</h1>
                    <p>I completed my high school education at Government Pre University College Brahmavara, where I obtained a score of 86% in my 10th grade. Additionally, I had the honor of being selected twice to represent my state in chess at the state level. It was a great achievement for me, and I feel proud of being able to compete at such a high level.</p>
                  </div>
                  <div className="right">
    
    
                    <img src={p3} className="img" alt="he"></img>
    
    
    
                  </div>
                </div>
                
                
              </div>
              <div className='contentt'>
                <div className='project '>
                  <div className="left">
                    <h1>Pre-University</h1>
                    <p>After graduating high school, I enrolled in Viveka PU College to pursue my pre-university education. I opted for the Science stream with Physics, Chemistry, Mathematics, and Biology (PCMB) as my main subjects. I am proud to say that I scored 87% in my PUC exams. I worked hard and focused on my studies, which paid off in the end. Overall, my experience at Viveka PU College was enriching and helped me lay a strong foundation for my future academic pursuits.</p>
                  </div>
                  <div className="right">
                    <img src={p4} className="img" alt="he"></img>
                  </div>
                  
                
                </div>
                
              </div>
              <div className='contentt'>
                <div className='project '>
                  <div className="left">
                    <h1>B-Tech</h1>
                    <p>After completing my PUC, I enrolled in Sahyadri College of Engineering and Management, Mangalore, to pursue my B.Tech degree. I am currently in my third year and have maintained a CGPA of 8.7. Additionally, I am proud to be a member of the chess team at our college. Our team secured third place in the zonal competition, which led to our selection for the interzonal competition. Being a part of the chess team has been a great experience, and I have learned valuable lessons about teamwork and perseverance.</p>
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
    
  

export default Education