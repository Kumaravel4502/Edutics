import { Link } from "react-router-dom";
import { BlogData } from "../Api/BlogData";

const Blog = () => {
    return (
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-40">
            {/* Header Section */}
            <div className="w-[87%]  mx-auto mb-10 lg:mb-16">
                <p className="text-lg sm:text-xl mb-3 sm:mb-4 sub-title">Our Blog</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Read Our latest
                        <span className="relative inline-block sub-title ml-2">
                            Blog
                            <img
                                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                                alt="Shape"
                                className="absolute left-0 right-0 w-full "
                                loading="lazy"
                            />
                        </span>
                    </h2>
                    <button className="relative rounded-sm h-[46px] w-full sm:w-auto min-w-[140px] bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
                        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                            <Link to="/blog">View All Blog</Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="w-[90%]  mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 ">
                    {BlogData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md"
                        >
                            <div className="w-full relative">
                                <div className="card card-compact bg-base-100 w-full ">
                                    <figure className="relative w-full lg:h-52 sm:h-56 md:h-46 overflow-hidden rounded-xl">
                                        <img
                                            src={item.image}
                                            alt="Blog"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Overlapping the image */}
                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm rounded-xl py-3 px-4 shadow-md w-[90%] max-w-[250px]">
                                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8.98919 11.5098C6.08847 11.5098 3.61133 11.9483 3.61133 13.7048C3.61133 15.4612 6.07276 15.9155 8.98919 15.9155C11.8899 15.9155 14.3663 15.4762 14.3663 13.7205C14.3663 11.9648 11.9056 11.5098 8.98919 11.5098Z"
                                                        stroke="#8A47CB"
                                                    />
                                                    <path
                                                        d="M8.99013 9.00441C10.8937 9.00441 12.4366 7.46084 12.4366 5.55727C12.4366 3.6537 10.8937 2.11084 8.99013 2.11084C7.08656 2.11084 5.54299 3.6537 5.54299 5.55727C5.53656 7.45441 7.06942 8.99798 8.96585 9.00441H8.99013Z"
                                                        stroke="#8A47CB"
                                                    />
                                                </svg>
                                                admin
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.32031 7.05334H15.6883"
                                                        stroke="#8A47CB"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2661 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                                                        stroke="#8A47CB"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                Sept 29, 2024
                                            </div>
                                        </div>
                                    </figure>

                                    {/* Content */}
                                    <div className="text-center mt-6">
                                        <h3 className="font-bold text-lg sm:text-xl mb-4 px-2">
                                            {item.Description}
                                        </h3>
                                        <button className="inline-flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-200 gap-1">
                                            <Link to={`/blog-details/${item.id}`}>Read More</Link>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                height="20"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;