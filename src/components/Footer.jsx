// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">News Website</h2>
            <p className="text-gray-400 mt-2">
              Your source for reliable news, 24/7.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.016-.609 1.797-1.574 2.165-2.723-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.92 0 .385.043.761.127 1.122C7.688 8.094 4.064 6.13 1.64 3.161c-.423.725-.666 1.562-.666 2.475 0 1.708.87 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.698 4.374 3.946 4.828-.413.113-.849.174-1.296.174-.317 0-.626-.03-.928-.086.627 1.955 2.445 3.376 4.6 3.416-1.68 1.318-3.809 2.104-6.115 2.104-.397 0-.788-.023-1.175-.069C2.178 19.293 4.768 20 7.548 20c9.054 0 14-7.506 14-14 0-.213-.005-.426-.014-.637.962-.694 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82V14.719h-3.327v-3.617h3.327V8.691c0-3.292 2.005-5.087 4.937-5.087 1.404 0 2.61.104 2.959.15v3.43h-2.03c-1.594 0-1.903.757-1.903 1.87v2.447h3.807l-.497 3.617h-3.31V24h6.467C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.354 0H4.646C2.081 0 0 2.082 0 4.646v14.709C0 21.918 2.081 24 4.646 24h14.709C21.918 24 24 21.918 24 19.354V4.646C24 2.082 21.918 0 19.354 0zM7.059 20.451H3.961V9.004h3.098v11.447zm-1.549-13.16c-1.015 0-1.841-.826-1.841-1.841s.826-1.841 1.841-1.841 1.841.826 1.841 1.841-.826 1.841-1.841 1.841zM20.451 20.451h-3.098v-5.579c0-1.33-.025-3.039-1.852-3.039-1.853 0-2.137 1.447-2.137 2.942v5.676h-3.098V9.004h2.973v1.563h.043c.414-.785 1.427-1.614 2.94-1.614 3.142 0 3.724 2.07 3.724 4.764v6.733z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">News</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Politics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
          <p>&copy; 2024 News Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
