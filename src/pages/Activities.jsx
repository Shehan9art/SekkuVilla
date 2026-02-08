import React, { useState } from 'react';

const activitiesData = [
  {
    id: 1,
    title: 'White Water Rafting',
    category: 'Adventure',
    distance: '22 km',
    description: 'Exciting rapids at Sea/Lagoon Activities near Ja Ela/Negombo coast',
    location: 'Sea / Lagoon Activities',
    coordinates: '7.157793270742924, 79.83222022666718',
    rating: 4.8,
    duration: '3-4 hours',
    price: '$45-65'
  },
  {
    id: 2,
    title: 'Muthurajawela Wetlands',
    category: 'Nature',
    distance: '12 km',
    description: 'Explore mangrove forests and wildlife in protected wetlands',
    location: 'Muthurajawela Wetlands',
    coordinates: '7.110745252207805, 79.87153264456036',
    rating: 4.7,
    duration: '2-3 hours',
    price: '$25-40'
  },
  {
    id: 3,
    title: 'Guruge Nature Park',
    category: 'Nature',
    distance: '10 km',
    description: 'Beautiful park with walking trails and natural scenery',
    location: 'Guruge Nature Park (Ja Ela)',
    coordinates: '7.068716318712333, 79.9010741294343',
    rating: 4.5,
    duration: '1-2 hours',
    price: 'Free'
  },
  {
    id: 4,
    title: 'Kitulgala White Water Rafting',
    category: 'Adventure',
    distance: '74 km',
    description: 'World famous white water rafting destination',
    location: 'Kitulgala',
    coordinates: '6.996705144948865, 80.40592992322863',
    rating: 4.9,
    duration: 'Full day',
    price: '$50-75'
  },
  {
    id: 5,
    title: 'Negombo Lagoon Tour',
    category: 'Nature',
    distance: '16 km',
    description: 'Boat tours through mangrove forests and bird watching',
    location: 'Negombo Lagoon & mangroves',
    coordinates: '7.112314993450662, 79.85597894528026',
    rating: 4.6,
    duration: '2 hours',
    price: '$30-50'
  },
  {
    id: 6,
    title: 'Kelaniya Temple',
    category: 'Culture',
    distance: '28 km',
    description: 'Ancient Buddhist temple with rich history',
    location: 'Kelaniya Raja Maha Viharaya',
    coordinates: '6.9522692900732945, 79.91854182593596',
    rating: 4.8,
    duration: '1-2 hours',
    price: 'Donation'
  },
  {
    id: 7,
    title: 'River Sports',
    category: 'Adventure',
    distance: '3.5 km',
    description: 'River sports and water activities at Mabima',
    location: 'Mabima wele bambuva',
    coordinates: '7.108460072945724, 79.94262010917662',
    rating: 4.4,
    duration: '2-3 hours',
    price: '$35-55'
  },
  {
    id: 8,
    title: 'Beach Relaxation',
    category: 'Leisure',
    distance: '23 km',
    description: 'Relax on pristine Negombo Beach',
    location: 'Negombo Beach',
    coordinates: '7.2483007287313885, 79.84095044608138',
    rating: 4.7,
    duration: 'Flexible',
    price: 'Free'
  },
  {
    id: 9,
    title: 'Air Balloon Ride',
    category: 'Adventure',
    distance: '130 km',
    description: 'Scenic hot air balloon rides over Sri Lanka',
    location: 'Sri Lanka Balloon - Lanka Ballooning',
    coordinates: '7.888576318728231, 80.66452710639014',
    rating: 4.9,
    duration: '3-4 hours',
    price: '$150-200'
  },
  {
    id: 10,
    title: 'Hiking Trail',
    category: 'Nature',
    distance: '16 km',
    description: 'Scenic hiking with panoramic views at Attanagalu',
    location: 'Attanagalu view',
    coordinates: '7.10773969885101, 79.86153747460115',
    rating: 4.5,
    duration: '2-3 hours',
    price: 'Free'
  },
  {
    id: 11,
    title: 'Waterfall Exploration',
    category: 'Nature',
    distance: '32 km',
    description: 'Visit beautiful Dehiella Waterfall',
    location: 'Dehiella Waterfall',
    coordinates: '7.104708793006319, 80.16741619603191',
    rating: 4.6,
    duration: '2-3 hours',
    price: 'Free'
  },
  {
    id: 12,
    title: 'Sea Sports Adventure',
    category: 'Adventure',
    distance: '21 km',
    description: 'Water sports and beach activities at Viksund Resort',
    location: 'Viksund WaterSports resort',
    coordinates: '7.148054444007536, 79.83665943121687',
    rating: 4.5,
    duration: '2-4 hours',
    price: '$40-60'
  }
];

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActivities, setFilteredActivities] = useState(activitiesData);

  const categories = ['All', 'Adventure', 'Nature', 'Culture', 'Leisure'];

  React.useEffect(() => {
    const filtered = activitiesData.filter(activity => {
      const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory;
      const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           activity.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredActivities(filtered);
  }, [selectedCategory, searchTerm]);

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 font-semibold">{rating}</span>
      </div>
    );
  };

  const openInMaps = (coordinates) => {
    const [lat, lng] = coordinates.split(',').map(coord => coord.trim());
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div className="min-h-screen leaf-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Natural Theme */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4 water-reflection">
                <span className="material-symbols-outlined text-4xl text-emerald-600">hiking</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Explore Activities
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover adventures and experiences around Sekku Villa, curated from our local database
            </p>
          </div>

          {/* Glass Effect Filter Section */}
          <div className="glass-card p-6 mb-12 fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600">
                    search
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                        : 'bg-white/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <div
                key={activity.id}
                className="glass-card group hover:shadow-2xl fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-emerald-600 opacity-50">
                      {activity.category === 'Adventure' ? 'kayaking' :
                       activity.category === 'Nature' ? 'forest' :
                       activity.category === 'Culture' ? 'temple_buddhist' : 'beach_access'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                    {activity.distance}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {activity.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{activity.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="material-symbols-outlined text-base mr-2">location_on</span>
                    {activity.location}
                  </div>
                  {renderStars(activity.rating)}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openInMaps(activity.coordinates)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined mr-2">map</span>
                    View Map
                  </button>
                  <button className="flex-1 px-4 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-16 glass-card fade-in">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-emerald-600">search_off</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">No activities found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter to find what you're looking for
              </p>
            </div>
          )}

          {/* Popular Activities Banner */}
          <div className="mt-16 glass-card p-8 fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  Most Popular Activities
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  These experiences are guest favorites. Book in advance to secure your spot!
                </p>
                <div className="space-y-4">
                  {activitiesData.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                          <span className="material-symbols-outlined text-emerald-600">{activity.icon}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white">{activity.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{activity.distance}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600">{activity.price}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">per person</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl mb-6">
                  <span className="material-symbols-outlined text-6xl text-emerald-600">emoji_events</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Best Rated Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our White Water Rafting has received perfect 4.9-star reviews from all guests
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold hover:scale-105 transition-transform">
                  View All Reviews
                </button>
              </div>
            </div>
          </div>

          {/* Owner Contact Card */}
          <div className="mt-16 glass-card p-8 fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  Need Help Booking?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact our owner directly for personalized activity arrangements and recommendations
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
                  We're here to help you plan the perfect itinerary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;