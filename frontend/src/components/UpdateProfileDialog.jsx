
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const {user} = useSelector(store=>store.auth);
    const [input, setInput]= useState({
        fullname:user?.fullname,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill=>skill),
        file:user?.profile?.resume
        
    })
    const dispatch= useDispatch();
    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value})
    }
    const submiHandler=async(e)=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append("fullname",input.fullname)
        formData.append("email",input.email)
        formData.append("phoneNumber",input.phoneNumber)
        formData.append("bio",input.bio)
        formData.append("skills",input.skills)
        if(input.file){
            formData.append("file",input.file)
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
                headers:{
                    "content-type":'multipart/form-data'
                },
                withCredentials:true
            });
            console.log(res)
            if(res.data.success){
                    // dispatch(setUser(res.data.user));
                    // toast.success(res.data.message);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        setOpen(false);
        console.log(input)
    }
    const fileChangeHandler=(e)=>{
            const file=e.target.files?.[0]
            setInput({...input,file})
    
    }
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submiHandler}>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="name" className='text-right'>Name</label>
                                <Input
                                    id='name'
                                    onChange={changeEventHandler}
                                    value={input.fullname}
                                    name='name'
                                    type='text'
                                    className='col-span-3'
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="email" className='text-right'>email</label>
                                <Input
                                    id='email'
                                    onChange={changeEventHandler}
                                    value={input.email}
                                    name='email'
                                    type='email'
                                    className='col-span-3'
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="number" className='text-right'>Number</label>
                                <Input
                                    id='number'
                                    onChange={changeEventHandler}
                                    value={input.phoneNumber}
                                    name='number'
                                    className='col-span-3'
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="bio" className='text-right'>Bio</label>
                                <Input
                                    id='bio'
                                    onChange={changeEventHandler}
                                    value={input.bio}
                                    name='bio'
                                    className='col-span-3'
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="skills" className='text-right'>skills</label>
                                <Input
                                    id='skills'
                                    onChange={changeEventHandler}
                                    value={input.skills}
                                    name='skills'
                                    className='col-span-3'
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap'>

                                <label htmlFor="file" className='text-right'>Resume</label>
                                <Input
                                    id='file'
                                     onChange={fileChangeHandler}      
                                    name='file'
                                    type='file'
                                    accept="application/pdf"
                                    className='col-span-3'
                                />
                            </div>

                        </div>
                        <DialogFooter>
                            {loading ? (
                                <Button className="w-full bg-blue-500 my-4">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full bg-blue-500 my-4">
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog