import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import TopCompanies from "./TopCompanies";
import Footer from "./Footer";
import './home.css';
import { FaAnglesUp } from "react-icons/fa6";
function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoader(false);
      document.body.style.overflow = "auto";
    }, 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);
  const scrollToHero = () => {
    const heroElement = document.getElementById("navbar");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      {loader ? (
        <div className="bg-white flex items-center justify-center absolute top-0 left-0 w-full h-full z-50">
          <div id="page">
            <div id="container">
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="ring"></div>
              <div id="h3">Jobs....</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-gray-100">
          <div id="navbar">
            <Navbar/>
          </div>
          <div id="hero">
          <HeroSection />
          </div>
          <CategoryCarousel />
          <TopCompanies />
          <LatestJobs />
          <div onClick={scrollToHero} className="fixed cursor-pointer bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full">
          <FaAnglesUp />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
