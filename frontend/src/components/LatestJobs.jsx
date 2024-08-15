import React from 'react'
import LatestJobCards from './LatestJobCards';
import { Button } from './ui/button';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
    return (
        <div className="max-w-5xl mx-auto my-20 h-5/6  flex flex-col ">
            <h1 className='text-4xl font-bold flex items-center justify-center'><span className='text-blue-500'>Latest & Top</span> Job Openings</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 my-5 px-1 sm:px-0">
                {
                    randomJobs.slice(0,6).map((item, index) => <LatestJobCards key={index} />)
                }
            </div>

           <div className='flex items-center justify-center'>
           <Button className='w-60 h-12 rounded-md bg-blue-500'>Get More Jobs</Button>
           </div>

        </div>
    )
}

export default LatestJobs