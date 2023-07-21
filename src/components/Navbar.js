import React, { useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

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
                                    Men
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Women
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Kids
                                </a>
                                <a
                                    href="/"
                                    className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    Beauty
                                </a>
                                <div className="lg:w-[40vw] relative mx-auto text-gray-600">
                                    <input
                                        className=" w-[100%] border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                    />
                                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                        <svg
                                            className="h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className="heroicon-ui"
                                                d="M21.707 20.293l-5.27-5.27A8.428 8.428 0 0 0 18 10.5C18 5.813 14.687 2.5 10 2.5S2 5.813 2 10.5 5.313 18.5 10 18.5c1.357 0 2.643-.34 3.768-.964l5.27 5.27a1 1 0 1 0 1.414-1.414zM10 16.5A6.5 6.5 0 1 1 10 3.5a6.5 6.5 0 0 1 0 13z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <a
                                    href="/"
                                    className="text-[#2d7dff] flex bg-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                >
                                    <span className='my-auto mx-1'>
                                        <BsFillCartFill />
                                    </span>
                                    Cart
                                </a>
                                {isAuthenticated ? (
                                    <button
                                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                        className="text-[#2d7dff] bg-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => loginWithRedirect()}
                                        className="text-[#2d7dff] bg-white font-semibold hover:bg-[#2d7dff] hover:text-white px-3 py-2 rounded-md text-sm"
                                    >
                                        Login
                                    </button>
                                )}
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
                        Men
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Women
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Kids
                    </a>
                    <a
                        href="/"
                        className="text-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Beauty
                    </a>
                    <div className="relative mx-auto text-gray-600">
                        <input
                            className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg
                                className="h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className="heroicon-ui"
                                    d="M21.707 20.293l-5.27-5.27A8.428 8.428 0 0 0 18 10.5C18 5.813 14.687 2.5 10 2.5S2 5.813 2 10.5 5.313 18.5 10 18.5c1.357 0 2.643-.34 3.768-.964l5.27 5.27a1 1 0 1 0 1.414-1.414zM10 16.5A6.5 6.5 0 1 1 10 3.5a6.5 6.5 0 0 1 0 13z"
                                />
                            </svg>
                        </button>
                    </div>
                    <a
                        href="/"
                        className="text-[#2d7dff] w-fit bg-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Cart
                    </a>
                    <a
                        href="/signup"
                        className="text-[#2d7dff] w-fit bg-white font-semibold hover:bg-[#2d7dff] hover:text-white block px-3 py-2 rounded-md text-base"
                    >
                        Login
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
