import React from "react";

const AboutUs = () => {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Section - New Modern Design */}
                    <div className="relative">
                        {/* Main Container with Gradient Background */}
                        <div className="relative w-96 h-96 mx-auto lg:mx-0">
                            {/* Background Gradient Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full shadow-2xl"></div>

                            {/* Floating Elements Container */}
                            <div className="relative w-full h-full">
                                {/* Central Main Image */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                                    <div className="relative w-full h-full">
                                        <img
                                            src="https://ik.imagekit.io/ixthr16gh/Intern-Work/banner-2-img-1.jpg?updatedAt=1755621677122"
                                            alt="Students studying"
                                            className="w-full h-full object-cover rounded-2xl shadow-xl"
                                        />
                                        {/* Floating Badge */}
                                        <div className="absolute -top-3 -right-3 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            LIVE
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 1 - Top Left */}
                                <div className="absolute top-8 left-8 w-32 h-20 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-800">Course</p>
                                            <p className="text-xs text-gray-500">Completed</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 2 - Top Right */}
                                <div className="absolute top-12 right-8 w-28 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-3">
                                    <div className="text-white text-center">
                                        <p className="text-xs font-bold">12</p>
                                        <p className="text-xs opacity-90">Lessons</p>
                                    </div>
                                </div>

                                {/* Floating Card 3 - Bottom Left */}
                                <div className="absolute bottom-8 left-8 w-36 h-20 bg-white rounded-xl shadow-lg border border-gray-100 p-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-800">Certificate</p>
                                            <p className="text-xs text-gray-500">Ready</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 4 - Bottom Right */}
                                <div className="absolute bottom-12 right-8 w-32 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-lg p-3">
                                    <div className="text-white text-center">
                                        <p className="text-xs font-bold">4.9</p>
                                        <div className="flex justify-center gap-1 mt-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M11.48 3.5a.75.75 0 0 1 1.04 0l2.7 2.63 3.73.54a.75.75 0 0 1 .42 1.28l-2.7 2.64.64 3.72a.75.75 0 0 1-1.09.79L12 14.98l-3.34 1.76a.75.75 0 0 1-1.09-.79l.64-3.72-2.7-2.64a.75.75 0 0 1 .42-1.28l3.73-.54Z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 right-1/2 transform translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                                <div className="absolute top-1/2 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                                <div className="absolute top-1/2 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Header */}
                        <div className="mb-6">
                            <h3 className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#5B3AEE] font-semibold mb-2">
                                ABOUT US
                            </h3>
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                <div className="w-8 h-0.5 bg-[#5B3AEE]"></div>
                                <div className="w-4 h-0.5 bg-[#5B3AEE]"></div>
                                <div className="w-6 h-0.5 bg-[#5B3AEE]"></div>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#241442] leading-tight mb-6">
                            Learn New Skills To Go Ahead For Your{" "}
                            <span className="relative">
                                Career
                                <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-400 transform -skew-x-12"></div>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#5B3AEE] rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <span className="text-[#241442] font-medium">Flexible Course Plan</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#5B3AEE] rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <span className="text-[#241442] font-medium">Expert mentors</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#5B3AEE] rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <span className="text-[#241442] font-medium">Educator Support</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#5B3AEE] rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <span className="text-[#241442] font-medium">Lifetime Access</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-[#5B3AEE] text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide hover:bg-[#4A2FD8] transition-colors duration-300 shadow-lg">
                            KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
