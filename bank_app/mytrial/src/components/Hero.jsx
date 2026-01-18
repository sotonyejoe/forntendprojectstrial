import React from 'react';
import heroImage from "../assets/hero-image.png"

const Hero = () => {
  return (
    <section id="home" className='container flex flex-col mx-auto justify-between md:flex-row pt-44 pb-6 px-4 sm:px-6 lg:px-8 min-h-screen'>
        {/* left column */}
        <div className='w-full md:w-1/2 space-y-8'>
            {/* star badge */}
            <div className='flex items-center gap-2 bg-blue-50 w-fit p-4 py-2 rounded-full hover:bg-gray-100
            transition-colors cursor-pointer group'>
                <span className='text-blue-600 hover:text-red-600 group-hover:scale-110 transition-transform'>★</span>
                <span className='text-sm font-medium'>Jump start your growth</span>
            </div>

            {/* heading */}
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>We boost the growth for <span className='text-blue-600 relative inline-block'>Startup to fortune 500
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 opacity-50'></span>
                    </span> Companies 
                    <span className='inline-block ml-2 animate-plus'>⏱️</span>
                    </h1>
                    <p className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversions, tools and more - all within the 
                        sane one billing.
                    </p>
            </div>
            <div className='flex gap-3 max-w-md'>
                <input type="email" placeholder='email address' className='flex-1 px-6 py-4 border-gray-200 rounded-xl
                focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' />
                <button className='items-center bg-blue-600 text-white px-6 py-2 rounded-md
                 transition-all font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300'>→</button>
            </div>
        </div>

        {/* right clumn */}
         <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
         <div className='relative'>
            <img src={heroImage} alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
         </div>
         </div>

    </section>
  )
}

export default Hero