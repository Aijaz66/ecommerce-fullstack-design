
import React, { useState, useEffect } from 'react';

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import DealsSection from '../components/DealsSection'
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';




const Home = () => {
   




  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <DealsSection></DealsSection>
      <CategoriesSection></CategoriesSection>
      <Footer></Footer>
      

      


    </div>
  )
}

export default Home