import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills=["HTML","CSS","JavaScript","React"]
const Profile = () => {
  const isResume=true;
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src="https://imgs.search.brave.com/8IpOqcqNRXc-08en11EmP8ryL9KNyg2xsx-Ju1tUkb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE5Lzc2/Ni8yNDAvbm9uXzJ4/L2FtYXpvbi1sb2dv/LWFtYXpvbi1pY29u/LXRyYW5zcGFyZW50/LWZyZWUtcG5nLnBu/Zw" alt="Profile" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p className='text-sm text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at creiciendis! Rerum, nulla omnis? Voluptates, architecto debitis?</p>
            </div>
          </div>
          <Button className='text-right' variant="outline"><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2' >
            <Mail/>
            <span>ashish@gmail.com</span> </div>
             
             <div className='flex items-center gap-3 my-2'> <Contact/>
            <span>9876543210</span> 
            </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
          {
            skills.length!==0?skills.map((item,index)=><Badge key={index}>{item}</Badge>):<span>NA</span>
          }
          </div>
        </div>
          <div className="grid w-full max-w-sm items-center gap-1">
            <Label className='text-md font-bold'>Resume</Label>

          {
            isResume? <a target='blank' href='https://youtube.com/@patelmernstack' className='text-blue-700 w-full hover:underline cursor-pointer'> Ashish</a>:<span>NA</span>
          }
          </div>
      </div>
          <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1>Appled Jobs</h1>
              {/* Application Table  */}
              <AppliedJobTable/>

          </div>
    </div>
  )
}

export default Profile