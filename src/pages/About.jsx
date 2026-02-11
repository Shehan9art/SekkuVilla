import React from 'react';

const About = () => {
  const features = [
    { icon: 'architecture', title: 'Traditional Design', description: 'Authentic Sri Lankan architecture with natural materials' },
    { icon: 'water', title: 'Poolside Living', description: 'Private swim pool with panoramic views' },
    { icon: 'spa', title: 'Wellness Focus', description: 'Designed for relaxation and rejuvenation' },
    { icon: 'eco', title: 'Sustainable', description: 'Eco-friendly practices and solar power' },
    { icon: 'landscape', title: 'Natural Setting', description: 'Surrounded by lush gardens and water features' },
    { icon: 'groups', title: 'Family Friendly', description: 'Perfect for families and groups' }
  ];

  return (
    <div className="min-h-screen leaf-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full flex items-center justify-center mx-auto mb-4 water-reflection">
                <span className="material-symbols-outlined text-6xl text-emerald-600">villa</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Where nature meets luxury in Ja-Ela, Sri Lanka
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in">
            <div>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Welcome to Sekku Villa
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Sekku Villa is a luxurious poolside retreat that harmoniously blends traditional 
                  Sri Lankan architecture with contemporary glass design. Our villa offers an 
                  immersive experience where you can reconnect with nature while enjoying modern comforts.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The name "Sekku" represents the traditional oil mill, symbolizing our commitment to 
                  preserving cultural heritage while creating sustainable, memorable experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">4.9</div>
                  <div className="text-sm text-gray-500">Guest Rating</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-500">Happy Guests</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">5</div>
                  <div className="text-sm text-gray-500">Years Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card overflow-hidden aspect-square rounded-3xl shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400/10 to-teal-400/10 flex items-center justify-center pool-wave">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-8xl text-emerald-600 opacity-50">
                      water_full
                    </span>
                    <div className="mt-4 text-xl font-semibold text-emerald-700">Swim Pool View</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20 fade-in">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Villa Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl text-emerald-600">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Section */}
          <div className="glass-card p-8 mb-20 fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Meet the Owner
                </h2>
                <div className="mb-6">
                  <div className="text-xl font-bold text-emerald-600">Nimesh Ranathunga</div>
                  <div className="text-gray-600 dark:text-gray-300">Owner & Host</div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  With over 10 years in hospitality and a deep passion for Sri Lankan culture, 
                  Nimesh created Sekku Villa to share the authentic beauty of his homeland with 
                  travelers from around the world.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="tel:+94714913226"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span className="material-symbols-outlined mr-2">call</span>
                    Contact Owner
                  </a>
                  <div className="text-sm text-gray-500">
                    Direct: +94 71 491 3226
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl mb-6">
                  <span className="material-symbols-outlined text-6xl text-emerald-600">person</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  "I believe in creating unforgettable experiences that connect people with nature 
                  and Sri Lankan culture."
                </p>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div className="glass-card p-8 fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
              Our Sustainability Promise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">solar_power</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Solar Power</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Renewable energy for all operations</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">water_drop</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Water Conservation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rainwater harvesting system</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">restaurant</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Local Produce</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Organic ingredients from local farms</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">recycling</span>
                </div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-white">Zero Waste</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive recycling program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;