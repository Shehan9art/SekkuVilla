import React from 'react';

// Transport data from your spreadsheet
const transportOptions = [
  {
    icon: 'directions_bus',
    title: 'Bus Stops',
    description: 'Local buses for short-distance travel',
    distance: '1.4 km',
    locations: [
      { name: 'Thapalpettiya bus stop', link: 'https://maps.app.goo.gl/zzC8JAXvixZkqjpN7' },
      { name: 'Mabima Bus Stop', link: 'https://maps.app.goo.gl/uxSTW6tSLT79SP3XA' },
      { name: 'Ja Ela Bus Stand', link: 'https://maps.app.goo.gl/rwcJwvqVMT993NxG9' }
    ]
  },
  {
    icon: 'bus_alert',
    title: 'Highway Bus',
    description: 'Express services to major cities',
    distance: '9 km',
    locations: [
      { name: 'Gampaha Bus Stand', link: 'https://maps.app.goo.gl/Gmk1Aj4Ju73AymGR7' },
      { name: 'Seeduwa Junction, Negombo', link: 'https://maps.app.goo.gl/qzz6rv7kJiBSKA3e8' }
    ]
  },
  {
    icon: 'train',
    title: 'Train Stations',
    description: 'Scenic routes via coastal railway',
    distance: '8-10 km',
    locations: [
      { name: 'Gampaha Railway station', link: 'https://maps.app.goo.gl/8MN7aVU4RAxAwiGz8' },
      { name: 'Seeduwa', link: 'https://maps.app.goo.gl/qKv6EC15A4CqwRTg8' }
    ]
  },
  {
    icon: 'flight',
    title: 'Airports',
    description: 'International and domestic connections',
    distance: '11.7-13 km',
    locations: [
      { name: 'Bandaranaike Airport (BIA)', link: 'https://www.google.com/maps?q=7.18075745580079,79.88434666488313' },
      { name: 'Cinnamon Air Domestic Terminal', link: 'https://www.google.com/maps?q=7.182559679939885,79.88857516332554' }
    ]
  },
  {
    icon: 'directions_boat',
    title: 'Harbour',
    description: 'Nearby harbours for sea excursions',
    distance: '35 km',
    locations: [
      { name: 'Colombo Harbour', link: 'https://maps.app.goo.gl/9U8JLjAzqeoZvBgA9' }
    ]
  },
  {
    icon: 'flight_land',
    title: 'Sea Planes',
    description: 'Breathtaking aerial island views',
    distance: '13 km',
    locations: [
      { name: 'Cinnamon Air Domestic Terminal', link: 'https://maps.app.goo.gl/R74hyhUUdJczXyy58' }
    ]
  },
  {
    icon: 'add_road',
    title: 'Highways',
    description: 'Easy access to major highways',
    distance: '10 km',
    locations: [
      { name: 'Ja ela Highway Access', link: 'https://maps.app.goo.gl/Xc3PD5fsSkG7sdLW6' }
    ]
  }
];

const Transport = () => {
  const openInMaps = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen leaf-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4 water-reflection">
                <span className="material-symbols-outlined text-4xl text-emerald-600">directions_car</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Getting Around
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Convenient travel options to explore Sri Lanka from Sekku Villa
            </p>
          </div>

          {/* Recommendation Banner */}
          <div className="mb-12 glass-card p-8 fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl text-white">recommend</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Our Recommendation
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Use the PickMe App for convenient and reliable transportation around Sri Lanka
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://pickme.lk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Download PickMe
                  </a>
                  <a 
                    href="https://www.uber.com/lk/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Uber Sri Lanka
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {transportOptions.map((option, index) => (
              <div 
                key={index}
                className="glass-card group hover:scale-[1.02] transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl text-emerald-600">{option.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors text-gray-800 dark:text-white">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {option.description}
                    </p>
                    <div className="flex items-center text-sm text-emerald-600 font-semibold">
                      <span className="material-symbols-outlined text-base mr-1">schedule</span>
                      {option.distance}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Locations:</div>
                  <div className="space-y-2">
                    {option.locations.slice(0, 2).map((location, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg">
                        <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{location.name}</span>
                        <button
                          onClick={() => openInMaps(location.link)}
                          className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                        >
                          Map →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => option.locations[0] && openInMaps(option.locations[0].link)}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform"
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 fade-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Car Rental Services</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We partner with reliable car rental services for your convenience. Choose from a variety of vehicles with or without drivers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Self-drive options available</span>
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">English-speaking drivers</span>
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">24/7 road assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Airport Transfer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Book your airport transfer directly through us for a seamless arrival experience.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Bandaranaike Airport (BIA)</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CMB - Colombo</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">30 mins</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">from villa</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Ratmalana Airport</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">RML - Colombo</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">45 mins</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">from villa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Contact Section */}
          <div className="mt-16 glass-card p-8 fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Need Transportation Help?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact our owner directly for personalized transportation arrangements and recommendations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-white">person</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 dark:text-white">Owner</div>
                      <div className="text-gray-600 dark:text-gray-300">Nimesh Ranathunga</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-white">call</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 dark:text-white">Contact</div>
                      <a href="tel:+94714913226" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                        +94 71 491 3226
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-8 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl mb-6">
                  <span className="material-symbols-outlined text-6xl text-emerald-600">support_agent</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We're here to help you with all your transportation needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;