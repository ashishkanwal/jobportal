import { PopoverContent, PopoverTrigger, Popover } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import './navbar.css'
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { LogOut, User2 } from 'lucide-react'

function Navbar() {
    const user=false;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-5xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Talent<span className='text-[#f83002]'>Link</span></h1>
                </div>
                <div className='flex items-center gap-10'>
                    <ul className='lists relative  font-medium items-center gap-5 cursor-pointer lg:flex hidden' >
                        {/* <li><Link>Home</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>Browse</Link></li> */}
                        <li className='item relative'>Home</li>
                        <li className='item relative'>Jobs</li>
                        <li className='item relative'>Browse</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>

                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className=' w-72 outline-none bg-gray-100 shadow-lg shadow-indigo-500/40 rounded-md px-2 py-2'>
                            <div className='flex gap-4 space-y-2'>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                </Avatar>
                                <div>

                                    <h4 className='font-medium'>Ashish Kanwal</h4>
                                    <p className='text-sm text-muted-foreground'>Junior Scientist at ISRO.</p>
                                </div>
                            </div>
                            <div className='flex flex-col my-2  text-gray-600'>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                    <User2/>
                                    <Button variant='link'>View Profile</Button>
                                </div>
                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                    <LogOut/>
                                    <Button variant='link'>Logout</Button>
                                </div>
                            </div>


                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default Navbar