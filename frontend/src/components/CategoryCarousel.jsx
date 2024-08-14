import React from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Mobile Developer",
  "DevOps Engineer",
  "Cloud Architect",
  "AI/ML Engineer",
  "Cybersecurity Specialist",
  "Database Administrator",
  "UX/UI Designer",
  "Quality Assurance (QA) Tester",
  "IT Support Specialist",
  "Network Engineer",
  "Blockchain Developer",
  "Systems Analyst",
  "Product Manager",
  "Software Architect",
  "Technical Writer"
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-3/6 max-w-6xl mx-auto my-20"> {/* Adjust the width as needed */}
        <CarouselContent className="flex gap-2"> {/* Adjust gap if needed */}
          {
            category.map((cat, index) => (
              <CarouselItem key={index} className="w-52"> {/* Ensure each item takes up 1/3 of the container */}
                <Button variant="outline" className="w-52 h-full bg-white text-black">{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
