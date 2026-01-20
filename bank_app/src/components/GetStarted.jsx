import React from "react";
import { arrowUp } from "../assets"; // make sure this path is correct

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-32 h-32 rounded-full border-2 border-blue-800 p-2 cursor-pointer">
      <div className="flex flex-col justify-center items-center w-full h-full rounded-full">
        {/* First row: Get + arrow */}
        <div className="flex flex-row justify-center items-center space-x-1">
          <p className="font-poppins font-medium text-[18px] text-gradient">
            Get
          </p>
          <img src={arrowUp} alt="arrow up" className="w-4 h-4 object-contain" />
        </div>

        {/* Second row: Started */}
        <p className="font-poppins font-medium text-[18px] text-gradient mt-1">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
