import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-6 py-12 bg-white">
            <div className="text-center max-w-4xl font-sans">
                <h1 className="text-4xl font-bold mb-8 text-black">CONTACT US</h1>

                <div className="space-y-6 text-gray-700">
                    <div className="flex justify-center items-center space-x-3">
                        <FaEnvelope size={24} className="text-blue-600" />
                        <a href="mailto:electronics.club.iitism@gmail.com" className="text-blue-600 underline text-lg">
                            electronics.club.iitism@gmail.com
                        </a>
                    </div>

                    <div className="flex justify-center items-center space-x-3">
                        <FaInstagram size={24} className="text-pink-500" />
                        <a
                            href="https://www.instagram.com/electronicsandiotclubiitism/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-lg"
                        >
                            @electronicsandiotclubiitism
                        </a>
                    </div>

                    <div className="flex justify-center items-center space-x-3">
                        <FaLinkedinIn size={24} className="text-blue-700" />
                        <a
                            href="https://www.linkedin.com/company/electronics-club-iitism-dhanbad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-lg"
                        >
                            Electronics & IOT Club , IITISM Dhanbad
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
