import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              TuneList
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-tiktok fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TuneList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
