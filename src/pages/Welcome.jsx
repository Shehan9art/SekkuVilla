import React from 'react';
import VillaMap from '../components/VillaMap';

const Welcome = () => {
  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-300/5 to-cyan-400/10 water-reflection"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center mx-auto water-reflection">
                <span className="material-symbols-outlined text-6xl text-emerald-600">villa</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Welcome to Sekku Villa
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              A luxury poolside retreat where traditional Sri Lankan charm meets contemporary glass elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/activities" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span className="material-symbols-outlined mr-2">explore</span>
                Explore Activities
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 glass-effect text-gray-700 dark:text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span className="material-symbols-outlined mr-2">call</span>
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Villa Highlights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experience luxury in harmony with nature
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card text-center p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 water-reflection">
                  <span className="material-symbols-outlined text-3xl text-emerald-600">water_full</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Swim Pool</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Panoramic views from our glass-edge swim pool
                </p>
              </div>
              
              <div className="glass-card text-center p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 water-reflection">
                  <span className="material-symbols-outlined text-3xl text-emerald-600">spa</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Wellness Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed for relaxation and rejuvenation
                </p>
              </div>
              
              <div className="glass-card text-center p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 water-reflection">
                  <span className="material-symbols-outlined text-3xl text-emerald-600">eco</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Eco-Luxury</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sustainable luxury with minimal environmental impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <VillaMap />

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Explore Sekku Villa
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="/activities" 
              className="group p-8 glass-card hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-emerald-600">hiking</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Activities</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Discover exciting adventures and experiences</p>
              <span className="inline-flex items-center text-emerald-600 font-semibold">
                Explore
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </a>
            
            <a 
              href="/dining" 
              className="group p-8 glass-card hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-emerald-600">restaurant</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Dining Options</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Taste local flavors and international cuisine</p>
              <span className="inline-flex items-center text-emerald-600 font-semibold">
                View Menus
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </a>
            
            <a 
              href="/transport" 
              className="group p-8 glass-card hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-emerald-600">directions_bus</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Transport</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Easy travel options and local transport</p>
              <span className="inline-flex items-center text-emerald-600 font-semibold">
                Get Directions
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Owner Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Contact Owner Directly
                </h2>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-white">person</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-800 dark:text-white">Nimesh Ranathunga</div>
                      <div className="text-gray-600 dark:text-gray-300">Owner & Host</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-white">call</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-800 dark:text-white">Contact Number</div>
                      <a href="tel:+94714913226" className="text-emerald-600 dark:text-emerald-400 hover:underline text-lg">
                        +94 71 491 3226
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  For personalized service, direct bookings, and special requests, contact Nimesh directly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl mb-6">
                  <span className="material-symbols-outlined text-6xl text-emerald-600">support_agent</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Available 24/7 to ensure your perfect stay
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;