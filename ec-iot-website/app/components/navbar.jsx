"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="fixed top-0 w-full bg-white text-gray-700 border-b border-gray-300 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-xl font-bold">ELECTRONICS & IOT CLUB</div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Achievements
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Projects
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Events
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Contacts
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li>
                            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}