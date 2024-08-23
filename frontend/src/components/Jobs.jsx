import React from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import './jobs.css';
import Job from './Job';
import Footer from './Footer';

const jobsArray = [1, 2, 3, 4, 5, 6];

const Jobs = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='max-w-6xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-[20%]'>
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className='flex-1 h-[80vh] overflow-y-auto pb-5 custom-scrollbar'>
              <div className='grid grid-cols-3 gap-4'>
                {jobsArray.map((item, index) => (
                  <div key={index}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Jobs;