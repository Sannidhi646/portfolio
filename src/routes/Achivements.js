
import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AC from "../components/AC";
import Others from "../components/others";
import Internership from '../components/Internership';
import Certificates from '../components/Certificates';
// import Nav2  from '../components/Nav2';
// import Coding from '../components/Coding';
class Achivements  extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Set scroll position to top of the page
      }
      render(){
  return (
    <div>
      <div>
            <Navbar/>
            <HeroImg2 heading="Achivements." text="Im a friendly Front-end developer"/>
            
           <AC/>
           <Others/>
           <Certificates/>
           <Internership/>
            <Footer/>
        </div>
    </div>
  )
}
}

export default Achivements
