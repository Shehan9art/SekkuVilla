import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/about', label: 'About', icon: 'info' },
    { path: '/activities', label: 'Activities', icon: 'hiking' },
    { path: '/dining', label: 'Dining', icon: 'restaurant' },
    { path: '/local-essentials', label: 'Local', icon: 'local_convenience_store' },
    { path: '/transport', label: 'Transport', icon: 'directions_car' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">villa</span>
              </div>
              <div>
                <span className="font-bold text-2xl bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  SEKKU VILLA
                </span>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">POOLSIDE RETREAT</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 border-r-2 border-emerald-500'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="material-symbols-outlined mr-2 text-lg group-hover:text-emerald-600">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="material-symbols-outlined mr-2">login</span>
              Guest Portal
            </Link>
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-700/70 transition-all duration-300"
            >
              {isDarkMode ? (
                <span className="material-symbols-outlined text-yellow-500">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-indigo-600">dark_mode</span>
              )}
            </button>
          </nav>

          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/50 dark:bg-gray-800/50"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/50 dark:bg-gray-800/50"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 glass-effect rounded-2xl mt-2">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <span className="material-symbols-outlined mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg font-semibold text-center"
              >
                Guest Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;