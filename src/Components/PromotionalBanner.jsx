import React from "react";

const PromotionalBanner = () => {
  return (
    // <section className="relative bg-[#5B3AEE] overflow-hidden">
    <div className="relative bg-[#5B3AEE] overflow-hidden 2xl:container mx-auto">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
                        45deg,
                        rgba(255,255,255,0.1) 0px,
                        rgba(255,255,255,0.1) 2px,
                        transparent 2px,
                        transparent 8px
                    )`,
          }}
        ></div>
      </div>

      <div className="2xl:container mx-auto px-4 lg:px-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-[32px] sm:text-[40px] sm:mt-10 md:text-[48px] lg:text-[56px] font-extrabold leading-tight mb-4">
                15% Offer For All Categories
              </h1>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold opacity-90">
                Courses
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-white text-black px-8 py-4 rounded-4xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                JOIN COURSES
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>

              <div className="relative">
                <svg
                  className="w-16 h-16 text-yellow-400"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 50 Q30 20 50 30 T80 50 Q70 80 50 70 T20 50"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M25 45 Q35 25 55 35 T75 45 Q65 75 45 65 T25 45"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96">
                <svg
                  className="w-full h-full text-yellow-400"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <path
                    d="M100 200 Q150 150 180 100 Q150 50 100 0 Q50 50 20 100 Q50 150 100 200"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://edutics.temptics.com/assets/img/cta-2-img.png"
                  alt="Smiling student with books"
                  className="w-80 h-96 md:w-96 md:h-[28rem] object-cover rounded-2xl shadow-2xl"
                />

                <div className="absolute -bottom-4 -left-4 w-16 h-20 bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 rounded-lg shadow-lg transform rotate-12"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-20 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 rounded-lg shadow-lg transform -rotate-6"></div>

                <div className="absolute -bottom-6 left-8 w-20 h-24 bg-yellow-400 rounded-lg shadow-lg transform rotate-3"></div>

                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  SUCCESS
                </div>

                <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">💪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-pulse delay-500"></div>
    </div>
    /* </section> */
  );
};

export default PromotionalBanner;
