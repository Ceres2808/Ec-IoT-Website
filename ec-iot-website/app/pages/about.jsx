import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-6 py-12 bg-white">
            <div className="text-center max-w-4xl font-sans">
                <h1 className="text-4xl font-bold mb-8 text-black">ABOUT US</h1>
                <p className="mb-6 text-gray-700 text-lg">
                    The Electronics and IoT Club aims to foster innovation, hands-on learning, and collaboration among enthusiasts of electronics and IoT technologies.
                </p>
                <p className="mb-6 text-gray-700 text-lg">
                    Our mission is to empower students with practical skills in electronics, microcontrollers, and IoT applications, preparing them for real-world challenges.
                </p>
                <p className="mb-6 text-gray-700 text-lg">
                    Through workshops, projects, and competitions, we provide a platform to explore and apply cutting-edge technologies in fields such as smart devices, automation, and connectivity.
                </p>
                <p className="text-gray-700 text-lg">
                    Core Focus Areas: Electronics and Electrical systems
                </p>
            </div>
        </div>
    );
};

export default About;
