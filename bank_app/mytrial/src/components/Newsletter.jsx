import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative px-6 md:px-16 py-16 md:py-24">

          {/* background shape */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 hidden md:block clip-path-slant" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* left content */}
            <div className="text-white max-w-lg text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Best cooks and best delivery guys all at your service. Fresh,
                tasty meals delivered fast.
              </p>
            </div>

            {/* right content */}
            <div className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    w-full sm:w-72
                    px-4 sm:px-6 py-4
                    bg-white
                    rounded-xl sm:rounded-r-none
                    focus:outline-none
                  "
                />

                <button
                  className="
                    w-full sm:w-auto
                    bg-green-500 text-white
                    flex items-center justify-center gap-2
                    py-4 px-6
                    rounded-xl sm:rounded-l-none
                    font-medium
                    hover:bg-green-600
                    transition
                  "
                >
                  Subscribe
                  <HiArrowRight className="w-5 h-5" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      <style>
        {
            `.clip-path-slant{
                clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
                }`
        }
      </style>
    </section>
  );
};

export default Newsletter;
