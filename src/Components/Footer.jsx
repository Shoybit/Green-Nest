import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center rounded p-10 bg-[#074d1e] text-white">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover hover:text-green-300 transition-colors">About us</a>
                <a className="link link-hover hover:text-green-300 transition-colors">Contact</a>
                <a className="link link-hover hover:text-green-300 transition-colors">Privacy Policy</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 cursor-pointer">
                    <a className="hover:text-green-300 transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a className="hover:text-green-300 transition-colors duration-300">
                        <FaInstagram size={20} />
                    </a>
                    <a className="hover:text-green-300 transition-colors duration-300">
                        <FaPinterestP size={20} />
                    </a>
                </div>
            </nav>
            <aside className='cursor-not-allowed'>
                <p >© {new Date().getFullYear()} GreenNest. All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;