import {
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import "./navbar.css";
import { IoSunnyOutline } from "react-icons/io5";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const {user}=useSelector(store=>store.auth);
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
          <div className="flex gap-5 h-full items-center">
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              Jobs<span className="text-blue-500">Seek</span>
            </Link>
            <div className="hidden sm:block">
              <span className="loader cursor-pointer"></span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <ul className="lists relative  font-medium items-center gap-5 cursor-pointer lg:flex hidden">
              <li className="item relative text-gray-500 hover:text-gray-800">
                <Link to="/">Home</Link>
              </li>
              <li className="item relative text-gray-500 hover:text-gray-800">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="item relative text-gray-500 hover:text-gray-800">
                <Link to="/browse">Browse</Link>
              </li>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className=" w-72 outline-none bg-gray-100 shadow-lg shadow-indigo-500/40 rounded-md px-2 py-2">
                    <div className="flex gap-4 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                          Junior Scientist at ISRO.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2  text-gray-600">
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer  flex items-center justify-center">
                    <IoSunnyOutline className="text-2xl" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className=" w-32 outline-none bg-gray-100 shadow-lg shadow-indigo-500/40 rounded-md px-2 py-2">
                  <div className="flex flex-col gap-1 px-2 text-sm cursor-pointer">
                    <h3 className="text-start text-sm">Dark</h3>
                    <h3 className="text-start text-sm">Light</h3>
                    <h3 className="text-start text-sm">Default</h3>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
