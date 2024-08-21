import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import UpdateProfileDialog from './updateProfileDialog'

const skills=["HTML","CSS","JavaScript","React"]
const isResume=true;

const Profile = () => {
  const [open,setOpen]=useState(false)
  const {user}=useSelector(store=>store.auth);
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src="https://github.com/shadcn.png"alt="@shadcn"  />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user.fullname}</h1>
              <p className='text-sm text-gray-500'>FullStack Web Developer</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className='text-right' variant="outline"><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2' >
            <Mail/>
            <span>{user.email}</span> </div>
             
             <div className='flex items-center gap-3 my-2'> <Contact/>
            <span>+91 {user.phoneNumber}</span> 
            </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className="flex items-center gap-1 my-2">
          {
            skills.length!==0?skills.map((item,index)=><Badge className='py-2 px-2 rounded-md' key={index}>{item}</Badge>):<span>NA</span>
          }
          </div>
        </div>
          <div className="grid w-full max-w-sm items-center gap-1">
            <Label className='text-md font-bold'>Resume</Label>

          {
            isResume? <a target='blank' href='https://youtube.com/@patelmernstack' className='text-blue-700 w-full hover:underline cursor-pointer'> Ashish.pdf</a>:<span>NA</span>
          }
          </div>
      </div>
          <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='my-5 font-bold text-lg px-3 py-2 '>Applied Jobs</h1>
              {/* Application Table  */}
              <AppliedJobTable/>

          </div>
          <UpdateProfileDialog open={open} setOpen={setOpen}/>
          <Footer/>
    </div>
  )
}

export default Profile