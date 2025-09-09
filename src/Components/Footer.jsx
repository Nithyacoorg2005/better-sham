"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">Better Clone</h2>
          <p className="text-sm text-gray-400">
            Helping you calculate mortgages and plan your future better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-gray-400">📍 123 Main St, City, Country</p>
          <p className="text-sm text-gray-400">📞 +1 (555) 123-4567</p>
          <p className="text-sm text-gray-400">✉️ info@betterclone.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Better Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
