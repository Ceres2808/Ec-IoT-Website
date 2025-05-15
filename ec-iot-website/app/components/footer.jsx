import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-lg font-bold">Ec-IoT Website</h1>
                        <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;