import { Avatar, AvatarImage } from './ui/avatar'
import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate=useNavigate();
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 '> 
            <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500 '>2 days ago</p>
            <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6 ' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://static.vecteezy.com/system/resources/previews/000/603/299/non_2x/media-capture-logo-design-concept-template-vector.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold text-lg my-2 '>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
            <Badge className='text-pink-500 font-bold' variant="ghost">{kob?.position} Positions</Badge>
            <Badge className='text-blue-400 font-bold' variant="ghost">{kob?.jobType}</Badge>
            <Badge className='text-green-500 font-bold' variant="ghost"> {kob?.salary}LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button variant="outline"onClick={()=>navigate(`/description/${job?._id}`)}>Details</Button>
            <Button className='bg-blue-500'>Save for later</Button>
        </div>
        </div>
    )
}

export default Job