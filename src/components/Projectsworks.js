import React from 'react'
import "./ProjectWorkstyle.css";
import foodleimg from "../asests/foodle.png";
import prafalimg from "../asests/prafal.png";
import dbms from "../asests/middaymeals.png";
const Projectsworks = () => {
    return (
        <div className='out'>
            <div className='project'>
                <div className="left">
                    <h1>Foodle</h1>
                    <p>Foodle is a website that was created during a hackathon in the company-specific category and won 3rd place. It functions similar to Zomato and assigns the nearest delivery boy to the customer. The front-end of the website was built using HTML, CSS, and EJS, while the back-end was built using Node.js. The location of the delivery boy is calculated using JavaScript. Overall, Foodle is a web-based application that connects customers with nearby delivery personnel to facilitate the delivery of food orders.</p>
                    
                </div>
                <div className="right">


                    <img src={foodleimg} className="imge" alt="he"></img>

                  <a href="https://github.com/Sannidhi646/foodLe" class="btn" id="btn1">Visite</a>

                </div>
            </div>
            <div className='project'>
                <div className="left">
                    <h1>Prafal Agro</h1>
                    <p>As an intern web developer at An Prafal, I have built two websites. The first one, "Internet Means," is already hosted and was built using HTML, CSS, and some JavaScript. This website is intended to provide information about the different ways people can access the internet. The second website is built using React and is not yet hosted. This project aims to showcase the different technologies and services offered by An Prafal. Overall, both projects demonstrate my skills in web development and my ability to use different technologies to create functional and visually appealing websites.</p>
                    
                </div>
                <div className="right">


                    <img src={prafalimg} className="imge" alt="he"></img>
                    <a href="https://www.prafal.com/" class="btn" id="btn1">Visite</a>
                </div>
            </div>
            <div className='project'>
                <div className="left">
                    <h1>Meals management</h1>
                    <p>MidMeal Manager is a project developed for academic purposes, utilizing Java for the front-end and SQL for the database. The application is designed to manage meal orders and payments for a mid-sized restaurant. The front-end interface allows customers to place orders, view their order history, and make payments. The database stores information on the menu items, customer orders, and payment details. With its user-friendly interface and robust database system, MidMeal Manager offers an efficient solution for restaurant management, enabling staff to quickly process orders and payments, and providing customers with a seamless ordering experience.</p>
                   
                </div>
                <div className="right">
                    <img src={dbms} className="imge" alt="he" ></img>
                    <a href="https://github.com/Sannidhi646/food-distribution" class="btn" id="btn1">Visite</a>
                </div>
            </div>
        </div>
    )
}

export default Projectsworks
