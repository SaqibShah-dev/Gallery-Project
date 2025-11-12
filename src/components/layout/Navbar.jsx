import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { value: "", label: "Select Country" },
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "zimbabwe", label: "Zimbabwe" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Gallery logo"
              className="h-20 w-20 object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">
              Gallery Project
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              className="text-lg font-medium text-gray-600 hover:text-amber-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium text-gray-600 hover:text-amber-500"
              to="/about"
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="countries" className="sr-only">
              Choose country
            </label>

            <select
              id="countries"
              name="countries"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label="Select country"
            >
              {countries.map((c, i) => (
                <option key={i} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            <Link
              className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-semibold px-4 py-2 rounded-md text-sm"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
