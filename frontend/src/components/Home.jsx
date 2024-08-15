import React, { useState, useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import TopCompanies from "./TopCompanies";
import Footer from "./Footer";
import './home.css';

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
          <Navbar />
          <HeroSection />
          <CategoryCarousel />
          <TopCompanies />
          <LatestJobs />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
