import React from 'react';
import monitorCard from "../assets/monitor-card.webp"
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24 '>
        <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24'>

         {/* left Section */}
             <div className='md:w-1/2 w-full'>
              <p className='text-green-600 font-bold'>MONITOR</p>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Introducing Best 
              <br />
                Mobile Carousel
              </h2>

              <p className='text-gray-600 mb-8'>
                Before the shop is really back. Round round, all round the world. Round round all round the world. Round 
                all round the world. Round all round the world.
              </p>
              
              <a href="#" className='text-blue-500 font-bold flex items-center gap-2 hover:gap-5'> 
                Learn more about monitoring
                <FaArrowRight className='size-5'/>
              </a>
             </div>



            {/* right Section */}
            <div>
                <img src={monitorCard} alt="schedule image" className='w-full h-auto' />
            </div>


            
        </div>
    </section>
  )
}

export default MonitorSection