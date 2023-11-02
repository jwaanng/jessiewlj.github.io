import HeroSection from '../components/Hero/Hero2';
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import Navbar2 from "../components/Navbar/Navbar2";

import NavBar3 from '../components/Navbar/Navbar3';
import MobileNav from '../components/Navbar/MobileNav';

function Home() {
  return (
    <>
      <NavBar3/>
      <MobileNav/>
      <HeroSection/>
      <AboutMe/>
      <Footer/>
    </>
  );
}

export default Home;
