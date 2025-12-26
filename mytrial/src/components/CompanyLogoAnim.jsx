import React from 'react';
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const CompanyLogoAnim = () => {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint]
 return (
  <div className="w-full container mx-auto py-20 px-4 sm:px-6 lg:px-8 mt-10">

    <div className="flex flex-col sm:flex-row sm:items-center gap-10">

      {/* Left text */}
      <div className="shrink-0 px-6 text-gray-600 border-l-4 border-blue-500 
                      bg-white py-2 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden w-full">

        {/* Moving track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70
                         hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}

          {/* duplicate logo */}
           {[...logos, ...logos].map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70
                         hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>

      </div>
    </div>
  </div>
);

}

export default CompanyLogoAnim