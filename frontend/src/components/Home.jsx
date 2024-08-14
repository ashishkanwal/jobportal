import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import TopCompanies from "./TopCompanies";
import Footer from "./Footer";
import './home.css'
function Home() {
  const [loader,setLoader]=useState(true);
  setTimeout(()=>{
    setLoader(false)
  },1000)
  return (
    <div className="relative min-h-screen">
      <div className="relative bg-gray-100">
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <TopCompanies />
        <LatestJobs />
        <Footer />
      </div>
      {loader?<div className="bg-white py-[250px]  absolute top-0 left-0 w-full  h-full z-10">
      <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">Jobs....</div>
        </div>
</div>
      </div>:null}
    </div>
  );
}

export default Home;
