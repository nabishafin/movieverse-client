import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For social media icons
import log2 from '../assets/icons8-video-100.png'


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-black py-12 text-white">
            <div className="container mx-auto px-4">
                {/* Logo Section */}
                <div className="flex items-center justify-between mb-8">
                    <img src={log2} alt="Logo" className="h-12 w-auto" />
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Footer Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400 transition duration-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition duration-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition duration-300">Movies</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-2">Email: info@moviewebsite.com</p>
                        <p className="text-gray-400">Phone: +123 456 7890</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; 2025 MovieWebsite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;