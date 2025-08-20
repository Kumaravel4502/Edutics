import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const dropdownItems = {
    pages: [
        { name: "AboutUs", path: "/about-us" },
        { name: "Our Team", path: "/our-team" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "404 Page", path: "/not-found" },
    ],
    courses: [
        { name: "Course Grid", path: "/course-grid" },
        { name: "Course List", path: "/course-list" },
        { name: "Course Details", path: "/courses" },
    ],
    blog: [
        { name: "Blog Standard", path: "/blog" },
        { name: "Blog Grid", path: "/blog-grid" },
        { name: "Blog Details", path: "/blog-details/1" },
    ],
};

const LoadingSpinner = () => (
    <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mx-auto"></div>
);

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState({
        home: false,
        contact: false,
        button: false,
    });
    const [loadingItems, setLoadingItems] = useState({});
    const [dropdown, setDropdown] = useState({
        pages: false,
        courses: false,
        blog: false,
    });
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const handleNavigation = async (path, key) => {
        if (path === location.pathname) return; // Don't navigate to the same page

        if (key) {
            setLoadingItems((prev) => ({ ...prev, [key]: true }));
        } else {
            setLoading((prev) => ({ ...prev, [path]: true }));
        }

        // Simulate button loading effect
        await new Promise((resolve) => setTimeout(resolve, 300));

        navigate(path);
        setShow(false);

        if (key) {
            setLoadingItems((prev) => ({ ...prev, [key]: false }));
        } else {
            setLoading((prev) => ({ ...prev, [path]: false }));
        }
    };

    const handleButtonClick = async () => {
        setLoading((prev) => ({ ...prev, button: true }));
        await new Promise((resolve) => setTimeout(resolve, 800));
        setLoading((prev) => ({ ...prev, button: false }));
        navigate("/contact");
    };

    const toggleMobileDropdown = (section) => {
        setDropdown((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <>
            {/* Sticky Navbar Container */}
            {/* <section className="relative bg-[#241442]  text-white "> */}

                <div className="2xl:container mx-auto sticky top-0 z-50 bg-[#241442] text-white ">
                <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <div className="w-full mx-auto flex justify-between items-center gap-4 py-2 sm:py-3 md:py-4 lg:py-5">
                        {/* Logo */}
                        <div
                            onClick={() => handleNavigation("/")}
                            className="cursor-pointer flex-shrink-0"
                        >
                            <img
                                src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Edutics.png"
                                alt="Logo"
                                className="w-[100px] h-8 xs:w-[110px] xs:h-9 sm:w-[125px] sm:h-10 md:w-[140px] md:h-12 lg:w-[150px] lg:h-12 xl:w-[160px] xl:h-13"
                            />
                        </div>

                        {/* Desktop & Tablet Menu */}
                        <nav className="hidden md:flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium cursor-pointer flex-1">
                            <div
                                onClick={() => handleNavigation("/", "home")}
                                className="relative flex items-center"
                            >
                                <li className="list-none hover:text-[#F1B725] transition-all duration-300 ease-in-out whitespace-nowrap">
                                    {loading.home ? <LoadingSpinner /> : "Home"}
                                </li>
                            </div>

                            {Object.entries(dropdownItems).map(([key, values]) => (
                                <div
                                    key={key}
                                    className="relative"
                                    onMouseEnter={() =>
                                        setDropdown((prev) => ({ ...prev, [key]: true }))
                                    }
                                    onMouseLeave={() =>
                                        setDropdown((prev) => ({ ...prev, [key]: false }))
                                    }
                                >
                                    <div className="flex items-center cursor-pointer">
                                        <li className="list-none hover:text-[#F1B725] capitalize transition-all duration-300 ease-in-out whitespace-nowrap">
                                            {key}
                                        </li>
                                        {/* <ChevronDown
                                            className={`ml-1 text-[#8A47CB] transition-transform duration-300 ${
                                                dropdown[key] ? "rotate-180" : ""
                                            }`}
                                            size={14}
                                        /> */}
                                    </div>
                                    {dropdown[key] && (
                                        <ul className="absolute top-full left-0 bg-white shadow-xl rounded-md mt-2 w-40 sm:w-48 py-2 z-20 animate-fade-in">
                                            {values.map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        handleNavigation(item.path, `${key}-${index}`)
                                                    }
                                                    className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                                                >
                                                    {loadingItems[`${key}-${index}`] ? (
                                                        <LoadingSpinner />
                                                    ) : (
                                                        item.name
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div
                                onClick={() => handleNavigation("/contact", "contact")}
                                className="relative flex items-center"
                            >
                                <li className="list-none hover:text-[#F1B725] transition-all duration-300 ease-in-out whitespace-nowrap">
                                    {loading.contact ? <LoadingSpinner /> : "Contact"}
                                </li>
                            </div>
                        </nav>

                        {/* Right side container for Button and Hamburger */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            {/* Button */}
                            <button
                                onClick={handleButtonClick}
                                disabled={loading.button}
                                className="hidden md:block relative h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px] cursor-pointer bg-[#5B3AEE] rounded-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 text-white hover:bg-[#241442] transition-all duration-300 ease-in-out"
                            >
                                <span className="relative z-10 flex justify-center items-center font-bold gap-1 md:gap-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                                    {loading.button ? <LoadingSpinner /> : "APPLY NOW"}
                                </span>
                            </button>

                            {/* Hamburger Icon - Mobile only */}
                            <div
                                className="md:hidden"
                                onMouseEnter={() => setIsMenuHovered(true)}
                                onMouseLeave={() => setIsMenuHovered(false)}
                            >
                                {!show ? (
                                    <Menu
                                        size={28}
                                        onClick={() => setShow(true)}
                                        className="cursor-pointer"
                                        stroke={isMenuHovered ? "#F1B725" : "#fff"}
                                    />
                                ) : (
                                    <X
                                        size={28}
                                        onClick={() => setShow(false)}
                                        className="cursor-pointer"
                                        stroke={isMenuHovered ? "#F1B725" : "#fff"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-white absolute w-full left-0 top-full shadow-lg p-4 sm:p-5 transition-all duration-300 ease-in-out ${show
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-10 pointer-events-none"
                        }`}
                >
                    <ul className="flex flex-col space-y-3 sm:space-y-4 text-center font-semibold text-gray-800">
                        <li
                            onClick={() => handleNavigation("/", "home")}
                            className="cursor-pointer py-3 sm:py-4 border-b border-gray-200 text-sm sm:text-base font-bold transition-all duration-300 hover:bg-gray-50"
                        >
                            {loading.home ? <LoadingSpinner /> : "Home"}
                        </li>

                        {Object.entries(dropdownItems).map(([key, values]) => (
                            <div
                                key={key}
                                className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white"
                            >
                                <button
                                    className="w-full flex justify-between items-center py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base font-bold text-gray-700 hover:bg-[#f9f5ff] transition-all"
                                    onClick={() => toggleMobileDropdown(key)}
                                >
                                    <span className="capitalize text-center w-full">{key}</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 ${dropdown[key]
                                                ? "rotate-180 text-[#8A47CB]"
                                                : "text-gray-500"
                                            }`}
                                    />
                                </button>

                                {dropdown[key] && (
                                    <ul className="bg-white px-4 sm:px-6 py-2 space-y-2 border-t border-gray-100 animate-fade-in">
                                        {values.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    handleNavigation(item.path, `${key}-${index}`)
                                                }
                                                className="cursor-pointer text-xs sm:text-sm py-2 sm:py-3 border-b border-gray-100 hover:bg-[#f0ebff] hover:text-[#8A47CB] transition-all rounded-md"
                                            >
                                                {loadingItems[`${key}-${index}`] ? (
                                                    <LoadingSpinner />
                                                ) : (
                                                    item.name
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <li
                            onClick={() => handleNavigation("/contact", "contact")}
                            className="cursor-pointer py-3 sm:py-4 border-t border-gray-200 text-sm sm:text-base font-bold transition-all duration-300 hover:bg-gray-50"
                        >
                            {loading.contact ? <LoadingSpinner /> : "Contact"}
                        </li>
                    </ul>
                </div>
                </div>
            {/* </section> */}
        </>
    );
};

export default NavBar;
