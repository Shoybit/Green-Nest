import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/green_nest_packaging_solutions_logo-depositphotos-bgremover.png';

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-br from-green-900 to-green-700 text-white">
      <div className="max-w-11/12 mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          
          <div className="flex-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="GreenNest Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold bg-linear-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
                GreenNest
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover beautiful plants for your home and garden. GreenNest is your ultimate destination for healthy, lush greenery.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors block">Indoor Plants</Link>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Outdoor Plants</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Flowering Plants</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Succulents</a>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#"  className="text-gray-300 hover:text-white transition-colors block">About Us</a>
              <a href="#"  className="text-gray-300 hover:text-white transition-colors block">Careers</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Contact</a>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">FAQ</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Shipping</a>
              <a href="#"className="text-gray-300 hover:text-white transition-colors block">Returns</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors block">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 pt-8 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-xl font-semibold mb-4 md:mb-0">Contact Me</h3>
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-green-200 transition-colors text-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-200 transition-colors text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-green-200 transition-colors text-2xl"><FaPinterestP /></a>
            <a href="#" className="hover:text-green-200 transition-colors text-2xl"><FaTwitter /></a>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2025 GreenNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
