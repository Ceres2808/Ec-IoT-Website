import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FaceCard = ({ image, name, designation, github, linkedin, email }) => {
    return (
        <div className="p-4 text-center max-w-xs">
            <img
                src={image}
                alt={`${name}'s face`}
                className="w-24 h-24 object-cover mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{designation}</p>
            <div className="flex justify-center space-x-4">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaGithub className="text-2xl" />
                </a>
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaLinkedin className="text-2xl" />
                </a>
                <a
                    href={`mailto:${email}`}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                    <FaEnvelope className="text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default FaceCard;
