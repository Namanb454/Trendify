import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#2874f0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center mx-auto">
                        <div className="flex-shrink-0">
                            {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                            <h2 className='text-xl font-bold text-[#d4e7ff]'>Trendify</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Search
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    About
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Contact
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Cart
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:ring- focus:ring-offset- focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16/4 18h16"
                                    />
                                </svg>
                            ) : (
                                // Icon when menu is open
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } md:hidden bg-[#2874f0]`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Home
                    </a> */}
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        About
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Contact
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Cart
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Login
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
