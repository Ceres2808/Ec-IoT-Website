import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-5 font-sans">
                <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
                <p className="mb-4 mx-auto max-w-4xl">
                    Welcome to our IoT solutions platform! At Ec-IoT, we are dedicated to revolutionizing the way people interact with technology by providing cutting-edge Internet of Things (IoT) solutions. Our mission is to empower businesses and individuals with smart, efficient, and sustainable IoT technologies that enhance everyday life.
                </p>
                <p className="mb-4 mx-auto max-w-4xl">
                    With a team of passionate innovators and industry experts, we strive to deliver high-quality products and services tailored to meet the unique needs of our clients. From smart home automation to industrial IoT applications, we are committed to driving innovation and creating a connected future.
                </p>
                <p>
                    Thank you for choosing Ec-IoT. Together, let's build a smarter and more connected world.
                </p>
            </div>
        </div>
    );
};

export default About;