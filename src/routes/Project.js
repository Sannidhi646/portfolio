
import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import ProjectWorks from '../components/Projectsworks';

class project extends Component {
  componentDidMount() {
    window.scrollTo(0, 0); // Set scroll position to top of the page
  }
  render(){
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="some of my most recent wworks"/>
     
      <ProjectWorks/>
      <Footer />
    </div>
);
  };
}

export default project
