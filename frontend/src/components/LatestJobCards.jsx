import { useNavigate } from 'react-router-dom'
import { Badge } from './ui/badge'
import React from 'react'

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5  rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div className=''>
        <div className='mb-4 w-full flex justify-center'><img className='h-full w-20' src="https://imgs.search.brave.com/8IpOqcqNRXc-08en11EmP8ryL9KNyg2xsx-Ju1tUkb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE5Lzc2/Ni8yNDAvbm9uXzJ4/L2FtYXpvbi1sb2dv/LWFtYXpvbi1pY29u/LXRyYW5zcGFyZW50/LWZyZWUtcG5nLnBu/Zw" alt="not found" /></div>
        <h1 className='font-medium text-lg '>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'> {job?.description} </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <Badge className='text-pink-500 font-bold' variant="ghost">{job?.position} Positions</Badge>
            <Badge className='text-blue-400 font-bold' variant="ghost"> {job?.jobType}</Badge>
            <Badge className='text-green-500 font-bold' variant="ghost">{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards