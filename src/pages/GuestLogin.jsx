import React, { useState } from 'react';

const GuestLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleQRScan = () => {
    // Simulate QR code scanning
    alert('Please present your QR code to the camera');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false);
      alert('Login successful! Welcome to Sekku Villa Guest Portal');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/80 via-cyan-50/60 to-blue-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-8 fade-in">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 7L12 12M22 7L12 12M12 22V12" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4.5L7 9.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Log in instantly with your QR code or credentials
            </p>
          </div>

          {/* QR Login Button */}
          <div className="mb-8 fade-in" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={handleQRScan}
              className="w-full flex items-center justify-center p-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined mr-3">qr_code_scanner</span>
              Scan QR to Log In
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300/50 dark:border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 dark:bg-gray-900/80 text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6 fade-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email / Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or username"
                  className="w-full px-4 py-3 pl-12 rounded-xl glass-effect border border-gray-300/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  required
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  person
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-xl glass-effect border border-gray-300/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  required
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  lock
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <button onClick={() => alert('Forgot Password functionality coming soon!')} className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Guest Features */}
          <div className="mt-12 fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-bold mb-6 text-center text-gray-800 dark:text-white">
              Guest Portal Features
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 glass-card">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-emerald-600">calendar_month</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 dark:text-white">Book Activities</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-emerald-600">restaurant</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 dark:text-white">Order Food</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-emerald-600">support_agent</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 dark:text-white">24/7 Support</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-emerald-600">receipt_long</span>
                </div>
                <div className="text-sm font-semibold text-gray-800 dark:text-white">View Bills</div>
              </div>
            </div>
          </div>

          {/* Admin Login */}
          <div className="mt-8 text-center fade-in" style={{ animationDelay: '0.5s' }}>
            <a 
              href="/admin" 
              className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 dark:text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span className="material-symbols-outlined mr-2">admin_panel_settings</span>
              Admin Login
            </a>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Need help logging in?
              </p>
              <div className="flex justify-center space-x-4">
                <a href="tel:+94714913226" className="flex items-center text-emerald-600 hover:text-emerald-500">
                  <span className="material-symbols-outlined mr-2">phone</span>
                  Call Support
                </a>
                <a href="mailto:support@sekkavilla.com" className="flex items-center text-emerald-600 hover:text-emerald-500">
                  <span className="material-symbols-outlined mr-2">mail</span>
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLogin;