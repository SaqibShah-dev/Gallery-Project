import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            Gallery Project
          </h2>
          <p className="text-sm text-gray-400">
            Discover, explore, and share beautiful visuals from creators around
            the world. Our mission is to connect creativity and community
            through stunning imagery.
          </p>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@galleryproject.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Creative Lane, Art City</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 text-center pt-5 text-gray-500 text-sm">
        © {new Date().getFullYear()} Gallery Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
