import React from 'react';

// Icons
import { FaLinkedin, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function NewFooter() {
  return (
    <footer className="bg-[#0099ff] text-white py-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">

        {/* Logo and Navigation */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-2xl font-bold mb-4">Logo</h1>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </nav>
        </div>

        {/* Subscription */}
        <div className="mb-8 md:mb-0 md:w-1/3 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="mb-4">Join our mailing list and get our news</p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/3 text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <Link to="#" className="text-2xl hover:text-gray-200"><FaLinkedin /></Link>
            <Link to="#" className="text-2xl hover:text-gray-200"><FaTwitter /></Link>
            <Link to="#" className="text-2xl hover:text-gray-200"><FaInstagram /></Link>
            <Link to="#" className="text-2xl hover:text-gray-200"><FaPhoneAlt /></Link>
            <Link to="#" className="text-2xl hover:text-gray-200"><IoLocationSharp /></Link>
          </div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>
            <Link to="/dash" className="hover:underline">Admin Dashboard</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
