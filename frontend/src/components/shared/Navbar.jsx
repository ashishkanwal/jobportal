import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import "./navbar.css";
import { IoNotificationsCircle, IoSunnyOutline } from "react-icons/io5";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2,LucideSave, Save } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { changeMode } from "@/redux/modeSlice";
import { toast } from "sonner";
import axios from "axios";
import SlidingPanel from "../SlidingPanel";

function Navbar() {
  const { user } = useSelector(store => store.auth);
  const { light } = useSelector(store => store.mode);
  const [bell,setBell]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  const letsChange = () => {
    dispatch(changeMode(!light));
  }
  
  return (
    <>
      <div className={`${light ? 'bg-gray-200' : 'bg-zinc-800 '}`}>
        <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
          <div className="flex gap-5 h-full items-center">
            <Link to="/" className={`${light ? 'text-black' : 'text-white'} text-2xl font-bold cursor-pointer`}>
              Job<span className="text-blue-500">Seek</span>
            </Link>
            <div className="hidden sm:block">
              <span className="loader cursor-pointer"></span>
            </div>
          </div>
          <div className="flex  items-center gap-12">
            <ul className='flex font-medium items-center gap-5'>
              {
                user && user.role === 'recruiter' ? (
                  <>
                    <li><Link to="/admin/companies">Companies</Link></li>
                    <li><Link to="/admin/jobs">Jobs</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="hover:text-gray-500" to="/">Home</Link></li>
                    <li><Link className="hover:text-gray-500" to="/jobs">Jobs</Link></li>
                    <li><Link className="hover:text-gray-500" to="/browse">Browse</Link></li>
                  </>
                )
              }


            </ul>

            <div className="flex gap-3">
              {!user ? (
                <div className="flex items-center gap-2">
                  <Link to="/login">
                    <Button
                      variant="outline"
                      className="bg-zinc-800 text-white"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-blue-500 hover:bg-blue-700">
                      Signup
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover >
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer ">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="z-20 w-72 outline-none bg-gray-100 shadow-lg shadow-indigo-500/40 rounded-md px-2 py-2">
                    <div className="flex gap-4 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user?.profile?.bio}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2  text-gray-600">

                      {
                        user && user.role === 'student' && (
                          <>
                          <div className='flex w-fit items-center gap-2 cursor-pointer'>
                            <User2 />
                            <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                          </div>
                          <div className='flex w-fit items-center gap-2 cursor-pointer'>
                            <Save/>
                            <Button variant="link"> <Link to="/saved">Saved Jobs</Link></Button>
                          </div>
                          
                          </>
                        )
                      }
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button onClick={logoutHandler} variant="link">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
           
               
                    <div className="flex items-center justify-center cursor-pointer">
                    <IoSunnyOutline onClick={letsChange} className={`${light ? 'text-black' : 'text-white'} text-2xl`} />
                    </div>
                
               
             {
              user? <div onClick={()=>setBell(!bell)} className="hidden relative sm:flex  items-center justify-center text-3xl cursor-pointer">
              <IoNotificationsCircle/>
              <div className="absolute top-2 right-0 w-3 h-3 bg-red-500 rounded-full text-sm flex items-center justify-center text-white">1</div>
            </div>:''
             }
            </div>
          </div>
        </div>
      <SlidingPanel isbell={bell}/>
      </div>
    </>
  );
}

export default Navbar;
