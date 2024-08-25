import React from 'react'
import LatestJobCards from './LatestJobCards';
import { Button } from './ui/button';
import { useSelector } from 'react-redux';
import store from '@/redux/store';

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
    return (
        <div className="max-w-5xl mx-auto my-20 h-5/6  flex flex-col ">
            <h1 className='text-4xl font-bold flex items-center justify-center'><span className='text-blue-500'>Latest & Top</span> Job Openings</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 my-5 px-1 sm:px-0">
                {
                    allJobs.lenght <= 0?<span>
                        No Job Available
                    </span>:allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id}job={job} />)
                }
            </div>

           <div className='flex items-center justify-center'>
           <Button className='w-60 h-12 rounded-md bg-blue-500'>Get More Jobs</Button>
           </div>

        </div>
    )
}

export default LatestJobs