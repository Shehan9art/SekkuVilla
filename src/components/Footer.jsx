import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-gray-200/50 dark:border-gray-800/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                SEKKU VILLA
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A luxury poolside retreat blending authentic Sri Lankan architecture with modern glass design in Ja-Ela.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Activities</Link></li>
              <li><Link to="/dining" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Dining</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Information</h3>
            <ul className="space-y-3">
              <li><Link to="/local-essentials" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Local Area</Link></li>
              <li><Link to="/transport" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Transport</Link></li>
              <li><Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Guest Portal</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <span className="material-symbols-outlined text-emerald-600 mr-2 text-sm">location_on</span>
                <span>Ja-Ela, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-emerald-600 mr-2 text-sm">phone</span>
                <span>+94 71 491 3226</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-emerald-600 mr-2 text-sm">mail</span>
                <span>info@sekkavilla.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Sekku Villa. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;