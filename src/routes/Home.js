import React, { useEffect } from 'react';

import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from '../components/Work';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Set scroll position to top of the page
      }, []);
    
    return (
        <div>
            <Navbar/>
            <Heroimg/>
            <Work/>
            <Footer/>
        </div>
    )
}
export default Home