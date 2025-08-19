import React, { useMemo, useState } from "react";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "personal-skill", label: "Personal Skill" },
    { key: "web-dev", label: "Web Development" },
    { key: "ux-ui", label: "UX/UI Design" },
    { key: "data-science", label: "Data Science" },
    { key: "finance", label: "Finance" },
];

const COURSES = [
    {
        id: 1,
        title: "Financial Analyst Training & Investing Course",
        thumb:
            "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop",
        duration: "8h 30m",
        level: "Expert",
        price: 59,
        students: 169,
        lessons: 12,
        instructor: "Jane Cooper",
        category: "finance",
        ratings: "https://ik.imagekit.io/ixthr16gh/Intern-Work/rating.png",
        smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg",
    },
    {
        id: 2,
        title: "Financial Analyst Training & Investing Course",
        thumb:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        duration: "8h 30m",
        level: "Expert",
        price: 59,
        students: 169,
        lessons: 12,
        instructor: "Jane Cooper",
        category: "data-science",
        ratings: "https://ik.imagekit.io/ixthr16gh/Intern-Work/rating.png",
        smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    },
    {
        id: 3,
        title: "Financial Analyst Training & Investing Course",
        thumb:
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        duration: "8h 30m",
        level: "Expert",
        price: 59,
        students: 169,
        lessons: 12,
        instructor: "Jane Cooper",
        category: "web-dev",
        ratings: "https://ik.imagekit.io/ixthr16gh/Intern-Work/rating.png",
        smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",
    },
    {
        id: 4,
        title: "Financial Analyst Training & Investing Course",
        thumb:
            "https://edutics.temptics.com/assets/img/course-4.jpg",
        duration: "8h 30m",
        level: "Expert",
        price: 59,
        students: 169,
        lessons: 12,
        instructor: "Jane Cooper",
        category: "personal-skill",
        ratings: "https://ik.imagekit.io/ixthr16gh/Intern-Work/rating.png",
        smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",
    },
];

const Courses = () => {
    const [active, setActive] = useState("all");

    const visibleCourses = useMemo(() => {
        if (active === "all") return COURSES;
        return COURSES.filter((c) => c.category === active);
    }, [active]);

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#7E88C3] font-semibold">
                        Our Courses
                    </p>
                    <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold text-[#241442]">
                        Edutics Courses
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActive(f.key)}
                            className={`px-3 py-1.5 text-xs sm:text-[13px] rounded-full border transition-colors ${active === f.key
                                ? "bg-[#5B3AEE] border-[#5B3AEE] text-white"
                                : "bg-white border-gray-200 text-[#241442] hover:bg-gray-50"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {visibleCourses.map((course) => (
                        <div
                            key={course.id}
                            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={course.thumb}
                                    alt={course.title}
                                    className="w-full h-48 md:h-52 object-cover"
                                />
                                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-[#F1B725] px-2.5 py-1 text-[11px] font-semibold text-white">
                                    {ClockIcon}
                                    {course.duration}
                                </div>
                                <div className="absolute right-4 bottom-4 rounded-md bg-white/95 px-2.5 py-1 text-[12px] font-bold text-[#5B3AEE] ring-1 ring-black/5">
                                    ${course.price.toFixed(2)}
                                </div>
                            </div>

                            <div className="p-4 md:p-5">
                                <span className="inline-block text-[11px] text-gray-500 rounded-full border border-gray-200 px-2 py-0.5 mb-2">
                                    {course.level}
                                </span>
                                <h3 className="text-[15px] md:text-[16px] font-semibold text-[#241442] leading-snug">
                                    {course.title}
                                </h3>

                                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span className="inline-flex items-center gap-1">{UsersIcon} {course.students} Students</span>
                                    <span className="inline-flex items-center gap-1">{BookIcon} {course.lessons} Lesson</span>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full overflow-hidden">
                                            <img
                                                src={course.smallImage}
                                                alt={course.instructor}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="text-[12px] text-[#241442] font-medium">{course.instructor}</div>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#F59E0B]">
                                        {/* {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i}>{StarIcon}</span>
                                        ))} */}
                                        <img
                                            src={course.ratings}
                                            alt="Rating"
                                            className="h-20 pl-10 sm:pl-12 pt-2"
                                        />
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

const ClockIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.762 9.762 0 0 0 12 2.25Zm.75 4.5a.75.75 0 0 0-1.5 0v4.69l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.41-2.41A.75.75 0 0 0 12.75 12V6.75Z" />
    </svg>
);

const UsersIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M15 8.25A3.75 3.75 0 1 1 11.25 12 3.75 3.75 0 0 1 15 8.25Zm6 9.75a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6 .75.75 0 0 1 1.5 0 4.5 4.5 0 0 0 4.5 4.5h6a4.5 4.5 0 0 0 4.5-4.5.75.75 0 0 1 1.5 0Z" />
    </svg>
);

const BookIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M6 3.75A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75Zm0 1.5h12c.414 0 .75.336.75.75v12a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V6c0-.414.336-.75.75-.75Z" />
    </svg>
);

const StarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M11.48 3.5a.75.75 0 0 1 1.04 0l2.7 2.63 3.73.54a.75.75 0 0 1 .42 1.28l-2.7 2.64.64 3.72a.75.75 0 0 1-1.09.79L12 14.98l-3.34 1.76a.75.75 0 0 1-1.09-.79l.64-3.72-2.7-2.64a.75.75 0 0 1 .42-1.28l3.73-.54Z" />
    </svg>
);

export default Courses;


