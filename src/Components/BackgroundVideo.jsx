import React from "react";
import { ArrowRight } from "lucide-react";

function BackgroundVideo() {
  return (
    <div className="2xl:container mx-auto bg-gray-50 flex items-center  mb-15 justify-center p-10">
      <div className="w-full max-w-6xl">
        {/* Hero Card */}
        <div className="relative bg-gradient-to-r m-10 from-purple-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="mx-auto absolute"
            src="https://edutics.temptics.com/assets/img/cta-3-bg.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-purple-600/80"></div>

          <div className="absolute inset-0">
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-20 h-24 bg-purple-800/40 rounded-lg"></div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-24 h-20 bg-purple-800/40 rounded-lg"></div>

            <div className="absolute top-4 right-16 w-16 h-12 bg-purple-800/30 rounded"></div>
            <div className="absolute bottom-6 left-16 w-12 h-8 bg-purple-800/30 rounded"></div>
          </div>

          <div className="relative z-10 px-8 py-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-xs font-medium tracking-wider uppercase">
                ONLINE CLASS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Expert Instructor Live
              <br />
              Classes Here!
            </h1>

            {/* CTA Button */}
            <button className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50  px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>JOIN COURSES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundVideo;
