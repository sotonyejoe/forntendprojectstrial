import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

 const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

const Footer = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                    {/* brand colum */}
                 <div className='lg:col-span-4'>
                       <div className='flex gap-1 items-center mb-6'>

                        <div className="flex items-center gap-1 cursor-pointer">
                            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75" />
                            <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full" />
                        </div>
                        <span className='text-1xl font-medium ml-1'>The Next Design</span>
                    </div>
                    <p className='text-gray-600 mb-6 mt-4 md:w-3/4'>The copy warned the Little Blind text, that it came from it would have 
                        been rewritten a thousand times.
                    </p>

                    <div className='flex gap-2 '>
                        <a href="#" className='w-10 h-10 flex bg-gray-200 rounded-full items-center justify-center text-gray-600
                         hover:text-blue-600 transition-all duration-300'>
                            <FaFacebook className='size-5'/>
                            </a>
                        <a href="#" className='w-10 h-10 flex bg-gray-200 rounded-full items-center justify-center text-gray-600
                         hover:text-blue-600 transition-all duration-300 '>
                            <FaTwitter className='size-5'/>
                            </a>
                        <a href="#" className='w-10 h-10 flex bg-gray-200 rounded-full items-center justify-center text-gray-600
                         hover:text-blue-600 transition-all duration-300'>
                            <FaLinkedin className='size-5'/>
                            </a>
                    </div>
                 </div>

                 {/* footer navigation items */}
                
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                            {
                                Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                    <div key={category}>
                                        <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                                        <ul className='space-y-3'>
                                            {
                                                links.map((link, index) => (
                                                    <li key={index}>
                                                        <a href="#" className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer