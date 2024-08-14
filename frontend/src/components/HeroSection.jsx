import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center bg-gray-100 h-5/6">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-pink-500 font-medium">
          Leading the Way in Job Search Excellence
        </span>
        <h1 className="text-5xl font-bold ">
          Seek, Connect & Achieve <br /> Your Career{" "}
          <span className="text-blue-500">Aspirations</span>
        </h1>
        <p className="text-gray-500">
          Unlock your potential with opportunities that match your skills.
        </p>
        <div className="flex w-[40%] bg-white shadow-lg border-gray-200 pl-3 items-center gap-4 mx-auto  h-20 rounded-[90px]">
          <input
            type="text"
            placeholder="Find Your dream Jobs and your destination . . ."
            className="outline-none border-none w-full h-10 px-2 text-xl  "
          />
          <Button className="h-12 py-2 mx-1 rounded-full bg-blue-500 mr-2">
            <Search className=" w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
