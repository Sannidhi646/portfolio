import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import HeroImg2 from '../components/HeroImg2';
import Footer from "../components/Footer";
import Form from "../components/Form"
// const contact = () =>
class contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0); // Set scroll position to top of the page
  }
  render(){
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="Contact" text="Lets excahnge our idea"/>
    <Form/>
             <Footer/>
             
</div>
)
}}

export default contact
