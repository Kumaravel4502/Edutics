import React, { useState, useEffect, useRef } from "react";

const FAQAndInstructors = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [hoveredInstructor, setHoveredInstructor] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedShapes, setAnimatedShapes] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const sectionRef = useRef(null);

  const faqData = [
    {
      question: "Organizes eLearning content in one location?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque augue vitae consequat. Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the.",
      icon: "📚",
    },
    {
      question: "How to buy an event ticket?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque augue vitae consequat. Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the.",
      icon: "🎫",
    },
    {
      question: "What type of company is measured?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque augue vitae consequat. Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the.",
      icon: "📊",
    },
  ];

  const instructors = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      title: "Digital Expert",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bgColor: "bg-amber-100",
      expertise: ["Digital Marketing", "SEO", "Analytics"],
      rating: 4.9,
      students: 1247,
      category: "digital",
      courses: 12,
      experience: "8+ years",
      languages: ["English", "Spanish"],
      social: {
        linkedin: "https://linkedin.com/in/brooklyn-simmons",
        twitter: "https://twitter.com/brooklyn_s",
        portfolio: "https://brooklyn-simmons.com",
      },
      bio: "Passionate digital marketing expert with over 8 years of experience helping businesses grow their online presence.",
      achievements: [
        "Google Certified",
        "Top 1% Instructor",
        "10K+ Students Helped",
      ],
    },
    {
      id: 2,
      name: "Leslie Alexander",
      title: "UI/UX Designer",
      image: "https://edutics.temptics.com/assets/img/instructor-4.jpg",
      bgColor: "bg-gray-100",
      expertise: ["User Research", "Prototyping", "Design Systems"],
      rating: 4.8,
      students: 892,
      category: "design",
      courses: 8,
      experience: "6+ years",
      languages: ["English", "French"],
      social: {
        linkedin: "https://linkedin.com/in/leslie-alexander",
        twitter: "https://twitter.com/leslie_a",
        portfolio: "https://leslie-alexander.design",
      },
      bio: "Creative UI/UX designer focused on creating intuitive and beautiful user experiences.",
      achievements: [
        "Adobe Certified",
        "Design Award Winner",
        "5K+ Projects Completed",
      ],
    },
    {
      id: 3,
      name: "Ronald Richards",
      title: "WordPress Expert",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bgColor: "bg-yellow-100",
      expertise: ["WordPress", "PHP", "Plugin Development"],
      rating: 4.7,
      students: 1563,
      category: "development",
      courses: 15,
      experience: "10+ years",
      languages: ["English", "German"],
      social: {
        linkedin: "https://linkedin.com/in/ronald-richards",
        twitter: "https://twitter.com/ronald_r",
        portfolio: "https://ronald-richards.dev",
      },
      bio: "WordPress developer with extensive experience in custom themes and plugin development.",
      achievements: [
        "WordPress Contributor",
        "Plugin Developer",
        "15K+ Downloads",
      ],
    },
    {
      id: 4,
      name: "Kristin Watson",
      title: "UI Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      bgColor: "bg-blue-100",
      expertise: ["Visual Design", "Branding", "Illustration"],
      rating: 4.9,
      students: 1034,
      category: "design",
      courses: 10,
      experience: "7+ years",
      languages: ["English", "Italian"],
      social: {
        linkedin: "https://linkedin.com/in/kristin-watson",
        twitter: "https://twitter.com/kristin_w",
        portfolio: "https://kristin-watson.design",
      },
      bio: "Visual designer specializing in brand identity and digital illustration.",
      achievements: [
        "AIGA Member",
        "Design Excellence Award",
        "8K+ Brand Projects",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          generateAnimatedShapes();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const generateAnimatedShapes = () => {
    const shapes = [];
    for (let i = 0; i < 8; i++) {
      shapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2000,
        color: ["bg-yellow-300", "bg-purple-300", "bg-pink-300", "bg-blue-300"][
          Math.floor(Math.random() * 4)
        ],
      });
    }
    setAnimatedShapes(shapes);
  };

  const handleInstructorHover = (id) => {
    setHoveredInstructor(id);
  };

  return (
    <div className="bg-white" ref={sectionRef}>
      <section
        className={`py-16 md:py-20 lg:py-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative w-96 h-96 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"></div>

                {/* Dynamic animated shapes */}
                {animatedShapes.map((shape) => (
                  <div
                    key={shape.id}
                    className={`absolute ${shape.color} rounded-full opacity-60 animate-pulse`}
                    style={{
                      left: `${shape.x}%`,
                      top: `${shape.y}%`,
                      width: `${shape.size}px`,
                      height: `${shape.size}px`,
                      animationDelay: `${shape.delay}ms`,
                    }}
                  ></div>
                ))}

                {/* Wavy line */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 to-transparent transform -rotate-12"></div>

                <div className="relative z-10 w-full h-full p-6">
                  <div className="absolute top-4 left-4 w-32 h-40">
                    <div className="relative w-full h-full">
                      <img
                        src="https://edutics.temptics.com/assets/img/faq-2-img-1.jpg"
                        alt="Smiling woman with books"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-sm transform rotate-12"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-36 h-32">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop"
                      alt="Students at laptop"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-60">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="Background person"
                      className="w-full h-full object-cover rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced FAQ Section */}
            <div className="text-center lg:text-left relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>

              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#241442] leading-tight mb-8 relative">
                We Are Always Ensure Best Course For Your Learning
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </h2>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                      activeFAQ === index
                        ? "ring-2 ring-[#5B3AEE] ring-opacity-20"
                        : ""
                    }`}
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-all duration-200 flex items-center justify-between group"
                      onClick={() =>
                        setActiveFAQ(activeFAQ === index ? -1 : index)
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{faq.icon}</span>
                        <span className="font-semibold text-[#241442] text-left group-hover:text-[#5B3AEE] transition-colors duration-200">
                          {faq.question}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-[#5B3AEE] transform transition-all duration-300 ${
                          activeFAQ === index
                            ? "rotate-180 scale-110"
                            : "scale-100"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        activeFAQ === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Instructors */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Enhanced Decorative Elements */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0">
                {/* Main light purple abstract shape */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-purple-200 rounded-full opacity-60 transform scale-110 animate-pulse"></div>
                  <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-r from-purple-300 to-transparent transform -rotate-12"></div>
                  <div className="absolute bottom-1/2 right-0 w-full h-3 bg-gradient-to-l from-purple-300 to-transparent transform rotate-12"></div>

                  {/* Floating geometric shapes */}
                  <div className="absolute top-8 left-8 w-8 h-8 bg-yellow-400 transform rotate-45 animate-bounce delay-1000"></div>
                  <div className="absolute top-16 right-16 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-16 left-16 w-10 h-10 bg-blue-400 transform rotate-45 animate-bounce delay-1500"></div>

                  {/* Animated dots pattern */}
                  <div className="absolute top-1/4 right-1/4 flex flex-col gap-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 bg-purple-400 rounded-full animate-ping`}
                        style={{ animationDelay: `${dot * 500}ms` }}
                      ></div>
                    ))}
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100 to-transparent opacity-40"></div>
                </div>

                {/* Floating content cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-xs font-semibold text-[#5B3AEE]">
                      Goal
                    </div>
                    <div className="text-xs text-gray-600">Achieved</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-3 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold">95%</div>
                    <div className="text-xs opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Instructors */}
            <div className="text-center lg:text-left">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <div className="w-8 h-0.5 bg-[#5B3AEE]"></div>
                  <div className="w-8 h-0.5 bg-[#5B3AEE]"></div>
                </div>
                <h3 className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#5B3AEE] font-semibold mb-2">
                  OUR INSTRUCTORS
                </h3>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#241442]">
                  Our Expert Instructors
                </h2>
              </div>

              {/* Search and Filter Controls */}
              <div className="mb-6 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search instructors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B3AEE] focus:border-transparent transition-all duration-200"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Filter and Sort Controls */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Category Filter */}
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B3AEE] focus:border-transparent transition-all duration-200"
                  >
                    <option value="all">All Categories</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                  </select>

                  {/* Sort Options */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B3AEE] focus:border-transparent transition-all duration-200"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="students">Sort by Students</option>
                    <option value="courses">Sort by Courses</option>
                    <option value="experience">Sort by Experience</option>
                  </select>
                </div>
              </div>

              {/* Filtered and Sorted Instructors Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {instructors
                  .filter((instructor) => {
                    if (
                      filterCategory !== "all" &&
                      instructor.category !== filterCategory
                    )
                      return false;
                    if (
                      searchTerm &&
                      !instructor.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                      !instructor.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                      !instructor.expertise.some((skill) =>
                        skill.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                    )
                      return false;
                    return true;
                  })
                  .sort((a, b) => {
                    switch (sortBy) {
                      case "rating":
                        return b.rating - a.rating;
                      case "students":
                        return b.students - a.students;
                      case "courses":
                        return b.courses - a.courses;
                      case "experience":
                        return parseInt(b.experience) - parseInt(a.experience);
                      default:
                        return 0;
                    }
                  })
                  .map((instructor) => (
                    <div
                      key={instructor.id}
                      className={`text-center transition-all duration-300 cursor-pointer group ${
                        hoveredInstructor === instructor.id
                          ? "transform scale-105"
                          : "hover:scale-105"
                      }`}
                      onMouseEnter={() => handleInstructorHover(instructor.id)}
                      onMouseLeave={() => handleInstructorHover(null)}
                      onClick={() => {
                        setSelectedInstructor(instructor);
                        setShowProfileModal(true);
                      }}
                    >
                      <div className="relative mb-3">
                        <div
                          className={`w-24 h-24 md:w-28 md:h-28 mx-auto ${instructor.bgColor} rounded-2xl p-2 transition-all duration-300 group-hover:shadow-lg`}
                        >
                          <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        {/* Rating badge */}
                        <div className="absolute -top-2 -left-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ {instructor.rating}
                        </div>

                        {/* Share icon */}
                        <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:scale-110">
                          <svg
                            className="w-3 h-3 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="font-bold text-[#241442] text-sm md:text-base mb-1 group-hover:text-[#5B3AEE] transition-colors duration-200">
                        {instructor.name}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm mb-2">
                        {instructor.title}
                      </p>

                      {/* Dynamic info on hover */}
                      <div
                        className={`transition-all duration-300 ${
                          hoveredInstructor === instructor.id
                            ? "max-h-32 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-xs text-gray-500 mb-2">
                          <span className="font-medium">
                            {instructor.students} students
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {instructor.expertise
                            .slice(0, 2)
                            .map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-[#5B3AEE] bg-opacity-10 text-white text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute bottom-4 right-4 w-16 h-16">
                <svg
                  className="w-full h-full text-yellow-400 animate-spin-slow"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 50 Q60 40 70 50 T90 50 Q80 60 70 50 T50 50"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 50 Q40 40 50 50 T70 50 Q60 60 50 50 T30 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Interactive Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="2xl:container mx-auto px-4 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h3 className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#5B3AEE] font-semibold mb-3">
              ACHIEVEMENTS
            </h3>
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-[#241442] mb-4">
              Our Success in Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "10K+",
                label: "Students",
                icon: "👨‍🎓",
                color: "from-blue-400 to-purple-400",
              },
              {
                number: "500+",
                label: "Courses",
                icon: "📚",
                color: "from-green-400 to-blue-400",
              },
              {
                number: "95%",
                label: "Success Rate",
                icon: "🎯",
                color: "from-yellow-400 to-orange-400",
              },
              {
                number: "24/7",
                label: "Support",
                icon: "🛟",
                color: "from-pink-400 to-red-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#241442] mb-2 group-hover:text-[#5B3AEE] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Floating action button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#5B3AEE] to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
              <span>Explore More</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Profile Modal */}
      {showProfileModal && selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#241442]">
                  Instructor Profile
                </h3>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Instructor Header */}
              <div className="flex items-center gap-6 mb-6">
                <div
                  className={`w-24 h-24 ${selectedInstructor.bgColor} rounded-full p-3`}
                >
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#241442] mb-2">
                    {selectedInstructor.name}
                  </h4>
                  <p className="text-lg text-gray-600 mb-2">
                    {selectedInstructor.title}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">
                        {selectedInstructor.rating}
                      </span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">
                      {selectedInstructor.students} students
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">
                      {selectedInstructor.courses} courses
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h5 className="font-semibold text-[#241442] mb-2">About</h5>
                <p className="text-gray-600 leading-relaxed">
                  {selectedInstructor.bio}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#5B3AEE]">
                    {selectedInstructor.experience}
                  </div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#5B3AEE]">
                    {selectedInstructor.courses}
                  </div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#5B3AEE]">
                    {selectedInstructor.students}
                  </div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#5B3AEE]">
                    {selectedInstructor.languages.length}
                  </div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <h5 className="font-semibold text-[#241442] mb-3">Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedInstructor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-[#5B3AEE] bg-opacity-10 text-white rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h5 className="font-semibold text-[#241442] mb-3">
                  Achievements
                </h5>
                <div className="space-y-2">
                  {selectedInstructor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-yellow-400">🏆</span>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h5 className="font-semibold text-[#241442] mb-3">Connect</h5>
                <div className="flex gap-3">
                  <a
                    href={selectedInstructor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={selectedInstructor.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={selectedInstructor.social.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#5B3AEE] text-white rounded-lg hover:bg-[#4A2FD8] transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Portfolio
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#5B3AEE] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#4A2FD8] transition-colors duration-200">
                  View Courses
                </button>
                <button className="flex-1 bg-white text-[#5B3AEE] border-2 border-[#5B3AEE] py-3 px-6 rounded-lg font-semibold hover:bg-[#5B3AEE] hover:text-white transition-all duration-200">
                  Contact Instructor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQAndInstructors;
