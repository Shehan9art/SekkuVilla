import React, { useState } from 'react';

const diningCategories = [
  { id: 'local', name: 'Local Food' },
  { id: 'non-local', name: 'Non-Local Food' },
  { id: 'street-food', name: 'Street Food' },
  { id: 'cafes', name: 'Cafés' },
  { id: 'pubs', name: 'Pubs' },
  { id: 'fine-dining', name: 'Fine Dining' }
];

// Updated restaurants data from your spreadsheet
const restaurants = {
  local: [
    {
      id: 1,
      name: 'Letona Cafe (Ja Ela)',
      cuisine: 'Local Cafe',
      distance: '10 min drive',
      price: '$$',
      rating: 4.2,
      description: 'Authentic local cafe experience',
      coordinates: '7.058954670952213, 79.89597491180704'
    },
    {
      id: 2,
      name: 'Whiterose Family Restaurant (Ja Ela)',
      cuisine: 'Family Restaurant',
      distance: '8 min drive',
      price: '$$',
      rating: 4.3,
      description: 'Family-friendly local restaurant',
      coordinates: '7.087360777011084, 79.89810098482269'
    },
    {
      id: 3,
      name: 'Kings Bakamuna Restaurant and Billiards',
      cuisine: 'Local & Sports Bar',
      distance: '15 min drive',
      price: '$$',
      rating: 4.5,
      description: 'Restaurant with billiards and entertainment',
      coordinates: '7.153652571262875, 79.88379389646369'
    },
    {
      id: 4,
      name: 'Migel\'s Kitchen Gampaha',
      cuisine: 'Local Cuisine',
      distance: '20 min drive',
      price: '$$',
      rating: 5.0,
      description: 'Highly rated local kitchen',
      coordinates: '7.120067158050617, 79.97605934763222'
    },
    {
      id: 5,
      name: 'Choice Food Nedagamuwa',
      cuisine: 'Local Food',
      distance: '5 min drive',
      price: '$$',
      rating: 5.0,
      description: 'Perfect local food spot',
      coordinates: '7.123802873649719, 79.94530988343081'
    },
    {
      id: 6,
      name: 'Mashi Family Foods',
      cuisine: 'Local Family Food',
      distance: '7 min drive',
      price: '$$',
      rating: 4.5,
      description: 'Family-oriented local cuisine',
      coordinates: '7.124052590076281, 79.95573443647905'
    },
    {
      id: 7,
      name: 'Elegant Café Restaurant',
      cuisine: 'Café & Restaurant',
      distance: '9 min drive',
      price: '$$',
      rating: 4.7,
      description: 'Elegant local dining experience',
      coordinates: '7.091658354899302, 79.89974382190196'
    }
  ],
  'non-local': [
    {
      id: 8,
      name: 'Rollick Restaurant',
      cuisine: 'International',
      distance: '12 min drive',
      price: '$$$',
      rating: 4.6,
      description: 'International cuisine with local twist',
      coordinates: '7.0828746621384795, 79.88408250236198'
    },
    {
      id: 9,
      name: 'SunsetBlu',
      cuisine: 'Fusion',
      distance: '45 min drive',
      price: '$$$$',
      rating: 4.7,
      description: 'Fine dining with sunset views',
      coordinates: '6.932492661983993, 79.84554093401657'
    },
    {
      id: 10,
      name: 'Graze Kitchen',
      cuisine: 'International',
      distance: '40 min drive',
      price: '$$$$',
      rating: 4.6,
      description: 'Luxury international dining',
      coordinates: '6.934393379992807, 79.8446413436422'
    },
    {
      id: 11,
      name: 'PalmBay Cafe Kadawatha',
      cuisine: 'Café Fusion',
      distance: '25 min drive',
      price: '$$',
      rating: 4.8,
      description: 'Modern café with international menu',
      coordinates: '7.009119822874416, 79.96492815413504'
    },
    {
      id: 12,
      name: 'PIZZERIA LA BOUGAINVILLEA',
      cuisine: 'Italian',
      distance: '20 min drive',
      price: '$$$',
      rating: 4.9,
      description: 'Authentic Italian pizzeria',
      coordinates: '7.006943165075745, 79.96568721409243'
    }
  ],
  'street-food': [
    {
      id: 13,
      name: 'මංකඩේ StreetFOOD',
      cuisine: 'Street Food',
      distance: '18 min drive',
      price: '$',
      rating: 5.0,
      description: 'Authentic Sri Lankan street food',
      coordinates: '6.994223919998053, 79.95507872529905'
    },
    {
      id: 14,
      name: 'පොල් රොටි කඩේ',
      cuisine: 'Street Snacks',
      distance: '15 min drive',
      price: '$',
      rating: 4.9,
      description: 'Traditional Sri Lankan snacks',
      coordinates: '6.997713385169358, 79.94766400657203'
    },
    {
      id: 15,
      name: 'Street Burger J ela',
      cuisine: 'Street Burgers',
      distance: '8 min drive',
      price: '$',
      rating: 4.9,
      description: 'Delicious street-style burgers',
      coordinates: '7.092856399092209, 79.8884264687341'
    }
  ],
  cafes: [
    {
      id: 16,
      name: 'Barista J ela',
      cuisine: 'Café',
      distance: '8 min drive',
      price: '$$',
      rating: 4.6,
      description: 'Professional coffee and cafe experience',
      coordinates: '7.087360777011084, 79.89810098482269'
    },
    {
      id: 17,
      name: 'Letona Cafe (Ja Ela)',
      cuisine: 'Local Cafe',
      distance: '10 min drive',
      price: '$$',
      rating: 4.2,
      description: 'Authentic local cafe experience',
      coordinates: '7.058954670952213, 79.89597491180704'
    }
  ],
  pubs: [
    {
      id: 18,
      name: 'Machan Ekala',
      cuisine: 'Pub Food',
      distance: '5 min drive',
      price: '$$',
      rating: 4.2,
      description: 'Local pub with great atmosphere',
      coordinates: '7.118842277248268, 79.91338798021788'
    },
    {
      id: 19,
      name: 'වාඩිය Chainees Restaurant',
      cuisine: 'Restaurant & Pub',
      distance: '3 min drive',
      price: '$$',
      rating: 4.0,
      description: 'Chinese restaurant with pub',
      coordinates: '7.100563771635621, 79.94565071892711'
    },
    {
      id: 20,
      name: 'Minuwangoda Rubber Estate',
      cuisine: 'Pub & Restaurant',
      distance: '12 min drive',
      price: '$$',
      rating: 4.8,
      description: 'Unique estate pub experience',
      coordinates: '7.158992102583113, 79.94315756207911'
    }
  ],
  'fine-dining': [
    {
      id: 21,
      name: 'SunsetBlu',
      cuisine: 'Fine Dining Fusion',
      distance: '45 min drive',
      price: '$$$$',
      rating: 4.7,
      description: 'Luxury fine dining with ocean views',
      coordinates: '6.932492661983993, 79.84554093401657'
    },
    {
      id: 22,
      name: 'Graze Kitchen',
      cuisine: 'Fine Dining International',
      distance: '40 min drive',
      price: '$$$$',
      rating: 4.6,
      description: 'Premium international fine dining',
      coordinates: '6.934393379992807, 79.8446413436422'
    }
  ]
};

const Dining = () => {
  const [activeCategory, setActiveCategory] = useState('local');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="material-symbols-outlined text-yellow-500">star</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="material-symbols-outlined text-yellow-500">star_half</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="material-symbols-outlined text-yellow-500">star_border</span>);
    }
    
    return stars;
  };

  const getPriceColor = (price) => {
    switch (price.length) {
      case 1: return 'text-green-600';
      case 2: return 'text-yellow-600';
      case 3: return 'text-orange-600';
      case 4: return 'text-red-600';
      default: return 'text-emerald-600';
    }
  };

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
                <span className="material-symbols-outlined text-4xl text-emerald-600">restaurant</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Dining Options
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Taste the flavors of Sri Lanka and international cuisine around Sekku Villa
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 fade-in">
            <div className="flex overflow-x-auto pb-4 space-x-3">
              {diningCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                      : 'bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurant Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants[activeCategory]?.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="glass-card group hover:scale-[1.02] transition-all duration-300 cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedRestaurant(restaurant)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-600 transition-colors text-gray-800 dark:text-white">
                      {restaurant.name}
                    </h3>
                    <span className={`text-lg font-bold ${getPriceColor(restaurant.price)}`}>
                      {restaurant.price}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {renderStars(restaurant.rating)}
                    <span className="ml-2 text-sm font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {restaurant.cuisine}
                </p>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="material-symbols-outlined text-base mr-2">location_on</span>
                  {restaurant.distance}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {restaurant.description}
                </p>
                
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Restaurant Details Modal */}
          {selectedRestaurant && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{selectedRestaurant.name}</h2>
                      <div className="flex items-center space-x-4">
                        <span className={`text-xl font-bold ${getPriceColor(selectedRestaurant.price)}`}>
                          {selectedRestaurant.price}
                        </span>
                        <div className="flex items-center">
                          {renderStars(selectedRestaurant.rating)}
                          <span className="ml-2 font-semibold">{selectedRestaurant.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedRestaurant(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                  </div>
                  
                  <div className="mb-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="flex items-center mb-2">
                      <span className="material-symbols-outlined text-emerald-600 mr-3">restaurant</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{selectedRestaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-emerald-600 mr-3">location_on</span>
                      <span className="text-gray-600 dark:text-gray-300">{selectedRestaurant.distance}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {selectedRestaurant.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => openInMaps(selectedRestaurant.coordinates)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform"
                    >
                      Get Directions
                    </button>
                    <button className="flex-1 px-6 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                      Book a Table
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Special Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 fade-in">
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">restaurant_menu</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Local Cuisine Guide</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Discover must-try Sri Lankan dishes and where to find the best versions of each.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Rice & Curry - Our top recommendation</span>
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Kottu Roti - The ultimate street food</span>
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-emerald-600 mr-3">check_circle</span>
                  <span className="text-gray-600 dark:text-gray-300">Hoppers & String Hoppers - Breakfast favorite</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">local_shipping</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Food Delivery</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Many restaurants offer delivery to Sekku Villa through popular food delivery apps.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform">
                  Uber Eats
                </button>
                <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-transform">
                  PickMe Food
                </button>
              </div>
            </div>
          </div>

          {/* Dining Tips */}
          <div className="glass-card p-8 fade-in">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Dining Tips & Recommendations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600">schedule</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Dining Hours</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Most restaurants open 11AM-11PM. Some close between 3-6PM.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600">payments</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Payment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Credit cards widely accepted. Carry cash for street food and small vendors.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600">groups</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Reservations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recommended for fine dining. Weekends can be busy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600">tips_and_updates</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Local Etiquette</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  It's customary to eat with your right hand for local food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;