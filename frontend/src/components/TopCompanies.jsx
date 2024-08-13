import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const company=["Google","Microsoft","Amazon","Flipkart"]
const TopCompanies = () => {
  return (
    <div className='max-w-5xl mx-auto my-20'>
        <div>
        <h1 className='text-4xl font-bold'><span className='text-blue-500'>Top companies</span> Hiring Now</h1>
        </div>
        <div>
      <Carousel className="w-5/6 max-w-6xl mx-auto my-20"> {/* Adjust the width as needed */}
        <CarouselContent className="flex gap-2  h-52 ml-2"> {/* Adjust gap if needed */}
          {
            company.map((cat, index) => (
              <CarouselItem key={index} className="w-60 border-2 rounded-md"> {/* Ensure each item takes up 1/3 of the container */}
                
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
  )
}

export default TopCompanies