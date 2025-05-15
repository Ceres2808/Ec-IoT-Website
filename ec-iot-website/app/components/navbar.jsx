"use client";

import { useState } from "react";

export default function Navbar({ onSelectPage }) {
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
                        <button
                            onClick={() => onSelectPage("home")}
                            className="hover:text-gray-300"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => onSelectPage("about")}
                            className="hover:text-gray-300"
                        >
                            About
                        </button>
                        <button
                            onClick={() => onSelectPage("projects")}
                            className="hover:text-gray-300"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => onSelectPage("events")}
                            className="hover:text-gray-300"
                        >
                            Events
                        </button>
                        <button
                            onClick={() => onSelectPage("achievements")}
                            className="hover:text-gray-300"
                        >
                            Achievements
                        </button>
                        <button
                            onClick={() => onSelectPage("members")}
                            className="hover:text-gray-300"
                        >
                            Members
                        </button>
                        <button
                            onClick={() => onSelectPage("contact")}
                            className="hover:text-gray-300"
                        >
                            Contact Us
                        </button>
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
                            <button
                                onClick={() => {
                                    onSelectPage("home");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("about");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("projects");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("events");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Events
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("achievements");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Achievements
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("members");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Members
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    onSelectPage("contact us");
                                    toggleMenu();
                                }}
                                className="block hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}