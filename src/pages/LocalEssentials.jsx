import React from 'react';

const essentials = [
  {
    id: 1,
    name: 'HOSPITALS',
    description: 'Nearby medical centers',
    icon: 'local_hospital',
    distance: '10-15 min drive',
    services: ['Emergency Care', '24/7 Service', 'English Speaking Doctors'],
    locations: [
      { name: 'Seeduwa Hospital', coordinates: '7.140605691237317, 79.87668618975053' },
      { name: 'Nawaloka Medical Center- Ja-ela', coordinates: '7.091119035578551, 79.90131139731666' }
    ]
  },
  {
    id: 2,
    name: 'PHARMACIES',
    description: 'Prescriptions & health supplies',
    icon: 'local_pharmacy',
    distance: '5-10 min drive',
    services: ['Prescription Filling', 'Over-the-counter', '24/7 Available'],
    locations: [
      { name: 'Arogya Pharmacy & Grocery', coordinates: '7.1061511236691, 79.93512867928655' },
      { name: 'New Ekala Pharmacy', coordinates: '7.103863045563784, 79.9098461865927' },
      { name: 'St. Joseph Pharmacy and grocery', coordinates: '7.089346005167728, 79.89769908471011' }
    ]
  },
  {
    id: 3,
    name: 'GROCERY STORES',
    description: 'Find all your daily needs',
    icon: 'storefront',
    distance: '5 min walk',
    services: ['Fresh Produce', 'Dairy', 'Bakery'],
    locations: [
      { name: 'Ekanayaka Stores', coordinates: '7.124752171918498, 79.94088912072365' },
      { name: 'Isuru Supermart and Pharmacy', coordinates: '7.121345441631152, 79.95685362858002' },
      { name: 'Nilame Kade', coordinates: '7.11346131026971, 79.94448214757344' },
      { name: 'Samantha Stores', coordinates: '7.124021707642691, 79.92475926864009' }
    ]
  },
  {
    id: 4,
    name: 'SUPERMARKETS',
    description: 'Larger selection of goods',
    icon: 'local_grocery_store',
    distance: '10 min drive',
    services: ['International Brands', 'Organic Section', 'Household Items'],
    locations: [
      { name: 'Cargills Food City - Ekala', coordinates: '7.103554297694865, 79.90995883927212' },
      { name: 'DILUNA SUPER', coordinates: '7.12092903131457, 79.91751193976332' },
      { name: 'SPAR Supermarket - Seeduwa', coordinates: '7.137895930193366, 79.8747691688345' },
      { name: 'keells Kotugoda', coordinates: '7.1197260225676, 79.91581678366492' }
    ]
  },
  {
    id: 5,
    name: 'FRUIT & VEG SHOPS',
    description: 'Fresh local produce',
    icon: 'nutrition',
    distance: '5 min walk',
    services: ['Local Fruits', 'Seasonal Vegetables', 'Organic Options'],
    locations: [
      { name: 'Priyantha Vegi Shop', coordinates: '7.095494678161214, 79.90168942103925' },
      { name: 'Prasanna Fresh Fruits', coordinates: '7.0834821287171446, 80.01454353702675' },
      { name: 'දුම් පෙට්ටිය Fresh and organic fruits', coordinates: '7.0957472499681185, 79.99823570642081' },
      { name: 'ලක්ෂ්මි පළතුරු එළවලු වෙළඳ සැල', coordinates: '7.101198310095133, 79.94725227810534' }
    ]
  },
  {
    id: 6,
    name: 'LIQUOR SHOPS',
    description: 'Local and imported beverages',
    icon: 'liquor',
    distance: '10 min drive',
    services: ['Local Arrack', 'Imported Spirits', 'Wine Selection'],
    locations: [
      { name: 'Milano Wine Stores', coordinates: '7.09881436400864, 79.90749360364904' },
      { name: 'Perera Wine Stores', coordinates: '7.093618796851358, 79.88904000585809' },
      { name: 'Golden wine Stores', coordinates: '7.0869751993381245, 79.89264489472889' }
    ]
  },
  {
    id: 7,
    name: 'FILLING STATIONS',
    description: 'Fuel for your vehicle',
    icon: 'local_gas_station',
    distance: '5 min drive',
    services: ['Petrol', 'Diesel', 'Car Wash'],
    locations: [
      { name: 'SINOPEC Filling Station', coordinates: '7.124041133584863, 79.92529559282394' },
      { name: 'Kotugoda Filling Station', coordinates: '7.120549229245626, 79.91830039163018' },
      { name: 'Kotugoda filling station 2', coordinates: '7.1234175321654245, 79.92001700567315' },
      { name: 'Lanka Filling Station', coordinates: '7.128186925919407, 79.98087096303958' }
    ]
  }
];

const emergencyContacts = [
  { name: 'Police', number: '119', icon: 'local_police' },
  { name: 'Ambulance', number: '110', icon: 'ambulance' },
  { name: 'Fire Department', number: '111', icon: 'fire_truck' },
  { name: 'Tourist Police', number: '+94 11 242 1052', icon: 'security' }
];

const LocalEssentials = () => {
  const openInMaps = (coordinates) => {
    const [lat, lng] = coordinates.split(',').map(coord => coord.trim());
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="min-h-screen leaf-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4 water-reflection">
                <span className="material-symbols-outlined text-4xl text-emerald-600">local_convenience_store</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              LOCAL ESSENTIALS
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need during your stay at Sekku Villa
            </p>
          </div>

          {/* Emergency Contacts Banner */}
          <div className="mb-12 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-red-600 dark:text-red-400">emergency</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-300">Emergency Contacts</h3>
                  <p className="text-red-600 dark:text-red-400 text-sm">Save these numbers for emergencies</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-sm">
                        {contact.icon}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-red-800 dark:text-red-300">{contact.name}</div>
                    <div className="text-xs text-red-600 dark:text-red-400">{contact.number}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Essentials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {essentials.map((item, index) => (
              <div 
                key={item.id}
                className="glass-card group hover:scale-[1.02] transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-emerald-600">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-emerald-600 transition-colors text-gray-800 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => item.locations[0] && openInMaps(item.locations[0].coordinates)}
                    className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined">near_me</span>
                  </button>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="material-symbols-outlined text-base mr-2">schedule</span>
                  <span>{item.distance}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.services.map((service, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-gray-500 mb-3">
                  Nearby locations:
                </div>
                <div className="space-y-2 mb-4">
                  {item.locations.slice(0, 2).map((location, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg"
                    >
                      <span className="text-sm truncate">{location.name}</span>
                      <button
                        onClick={() => openInMaps(location.coordinates)}
                        className="text-xs text-emerald-600 hover:text-emerald-700"
                      >
                        Map →
                      </button>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => item.locations[0] && openInMaps(item.locations[0].coordinates)}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform"
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>

          {/* Operating Hours Info */}
          <div className="mb-12 grid md:grid-cols-2 gap-8 fade-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                <span className="material-symbols-outlined text-emerald-600 mr-3">schedule</span>
                Typical Operating Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="font-medium text-gray-800 dark:text-white">Supermarkets</span>
                  <span className="text-gray-600 dark:text-gray-400">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="font-medium text-gray-800 dark:text-white">Pharmacies</span>
                  <span className="text-gray-600 dark:text-gray-400">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="font-medium text-gray-800 dark:text-white">Banks</span>
                  <span className="text-gray-600 dark:text-gray-400">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <span className="font-medium text-gray-800 dark:text-white">Local Shops</span>
                  <span className="text-gray-600 dark:text-gray-400">7:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
                <span className="material-symbols-outlined text-emerald-600 mr-3">lightbulb</span>
                Helpful Tips
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-emerald-600 mr-3 mt-1">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Most shops accept credit cards, but carry cash for small vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-emerald-600 mr-3 mt-1">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Bargaining is common in local markets but not in supermarkets</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-emerald-600 mr-3 mt-1">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Sunday is a holiday for most businesses, but tourist areas remain open</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-emerald-600 mr-3 mt-1">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Many pharmacies deliver to the villa - ask for delivery service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Owner Contact Section */}
          <div className="glass-card p-8 fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Need Assistance?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact our owner directly for personalized help with any local needs or emergencies.
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
                  We're here to help you with any local needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalEssentials;