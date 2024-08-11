import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10' action="">
                <h1 className='font-bold text-xl mb-5'>Login</h1>
                <div className='my-2'>
                    <Label >Email</Label>
                    <Input
                    type="email"
                    placeholder="Enter your Email Id"
                    />
                </div>
                <div className='my-2'>
                    <Label >Password</Label>
                    <Input
                    type="password"
                    placeholder="***********"
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <RadioGroup className='flex items-center gap-4 my-5'>
                        <div className='flex items-center space-x-2'>
                            <Input 
                            type="radio"
                            name="role"
                            value="applicant"
                            className='cursor-pointer'/>
                            <Label htmlFor='r1'>Applicant</Label>
                        </div>
                        <div className='flex items-center space-x-2'>
                        <Input 
                            type="radio"
                            name="role"
                            value="recruiter"
                            className='cursor-pointer'/>
                            <Label htmlFor='r1'>Recruiter</Label>
                        </div>
                        
                    </RadioGroup>

                </div>
                <Button type='submit' className='w-full bg-[#6A38C2] my-4'>Login</Button>
                <span>Don't  have an account ? <Link className='text-blue-600' to="/signup">SignUp</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login