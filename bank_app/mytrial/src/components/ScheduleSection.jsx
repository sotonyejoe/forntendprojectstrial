import React from 'react';
import scheduleImage from "../assets/stats.webp"
import { FaArrowRight } from "react-icons/fa";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24 '>
        <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24'>
            {/* Left Section */}
            <div>
                <img src={scheduleImage} alt="schedule image" className='w-full h-auto' />
            </div>


             {/* Right Section */}
             <div className='md:w-1/2 w-full'>
              <p className='text-orange-500 font-semibold'>SCHEDULE</p>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business
              <br />
                With Smart Scheduling Solutions
              </h2>

              <p className='text-gray-600 mb-8'>
                Take control of your time and boost productivity with our intelligent scheduling system. 
                Automate appointments, manageteam availability, and exceptional customer  experience through
                seamless calendar management
              </p>
              
              <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-5'> 
                Explore Scheduling features
                <FaArrowRight className='size-5'/>
              </a>
             </div>
        </div>
    </section>
  )
}

export default ScheduleSection