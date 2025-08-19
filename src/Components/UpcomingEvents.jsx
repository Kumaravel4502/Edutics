import React from "react";

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            image: "https://edutics.temptics.com/assets/img/event-4.jpg",
            tag: "Skills",
            tagIcon: (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                </svg>
            ),
            time: "11:00 - 13:30",
            title: "Learning Communicate To Global",
            description: "There are many variations of passages of Lorem Ipsum"
        },
        {
            id: 2,
            image: "https://edutics.temptics.com/assets/img/event-3.jpg",
            tag: "Skills",
            tagIcon: (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                </svg>
            ),
            time: "11:00 - 13:30",
            title: "Learning Communicate To Global",
            description: "There are many variations of passages of Lorem Ipsum"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
            tag: "Programming",
            tagIcon: (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            time: "11:00 - 13:30",
            title: "Learning Communicate To Global",
            description: "There are many variations of passages of Lorem Ipsum"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
            tag: "Programming",
            tagIcon: (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            time: "11:00 - 13:30",
            title: "Learning Communicate To Global",
            description: "There are many variations of passages of Lorem Ipsum"
        }
    ];

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        {/* Subtitle */}
                        <div className="flex items-center gap-2 mb-3">
                            <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#5B3AEE] font-semibold">
                                UPCOMING EVENTS
                            </p>
                            <div className="flex gap-1">
                                <div className="w-0.5 h-4 bg-[#5B3AEE]"></div>
                                <div className="w-0.5 h-4 bg-[#5B3AEE]"></div>
                            </div>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#241442]">
                            Upcoming Event
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#5B3AEE] hover:bg-[#5B3AEE] hover:text-white transition-all duration-300 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#5B3AEE] hover:bg-[#5B3AEE] hover:text-white transition-all duration-300 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="flex">
                                {/* Left Side - Image Section */}
                                <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Tag */}
                                    <div className="absolute bottom-2 left-2 bg-yellow-400 rounded-lg px-2 py-1 flex items-center gap-1 shadow-sm">
                                        {event.tagIcon}
                                        <span className="text-[10px] md:text-xs text-white font-semibold">
                                            {event.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side - Content Section */}
                                <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                                    {/* Time */}
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm.75 4.5a.75.75 0 0 0-1.5 0v4.69l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.41-2.41A.75.75 0 0 0 12.75 12V6.75Z" />
                                        </svg>
                                        <span className="font-medium">{event.time}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#241442] leading-tight mb-2">
                                        {event.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {event.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-[#5B3AEE] hover:text-[#4A2FD8] transition-colors duration-300 cursor-pointer group">
                                        <span className="text-sm font-medium">Read More</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
