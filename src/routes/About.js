
import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Aboutcontent from '../components/Aboutcontent';
import Education from '../components/Education';
class about extends Component {

  componentDidMount() {
    window.scrollTo(0, 0); // Set scroll position to top of the page
  }
  render(){
  return (
 
     <div>
            <Navbar/>
            <HeroImg2 heading="AboutMe." text="Im a friendly Front-end developer"/>
            <Aboutcontent/>
            <Education/>
            <Footer/>
        </div>
    
  )
}}

export default about
