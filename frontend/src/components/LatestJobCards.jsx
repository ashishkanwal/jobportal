import { Badge } from './ui/badge'
import React from 'react'

const LatestJobCards = () => {
  return (
    <div className='p-5  rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div className=''>
        <div className='mb-4 w-full flex justify-center'><img className='h-full w-20' src="https://th.bing.com/th/id/R.c117a0bda103aeb25c145a71b0b8ac5a?rik=mE5vIzQDJQrW9w&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmicrosoft%2fmicrosoft_PNG10.png&ehk=kDRkokzjrya%2bERV6Vc5%2bbBAA7bwSDydXr7Cz5Spo4qk%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
        <h1 className='font-medium text-lg '>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'> Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <Badge className='text-pink-500 font-bold' variant="ghost">12 Positions</Badge>
            <Badge className='text-blue-400 font-bold' variant="ghost"> Part Time</Badge>
            <Badge className='text-green-500 font-bold' variant="ghost"> 24LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards