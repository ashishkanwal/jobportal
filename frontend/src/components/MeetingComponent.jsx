import React from 'react';
import Slider from 'react-slick';
import microsoft from '../assets/microsoft.jpeg';
import anotherImage from '../assets/googleOffice.jpeg'; // Add more images as needed

const MeetingComponent = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='max-w-5xl mx-auto my-20 h-5/6 flex-col flex gap-5'>
      <h1 className='text-center text-4xl font-bold flex items-center justify-center'>
        New Opportunities are -<span className='text-blue-500'>Waiting</span>
      </h1>
      <Slider {...settings} className='w-full h-full'>
        <div>
          <img src={microsoft} className='w-full h-full object-cover rounded-md' alt="Microsoft" />
        </div>
        <div>
          <img src={anotherImage} className='w-full h-full object-cover rounded-md' alt="Another" />
        </div>
        {/* Add more <div> blocks here with <img> elements for additional images */}
      </Slider>
    </div>
  );
};

export default MeetingComponent;
