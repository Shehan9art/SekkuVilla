import React from 'react';

const VillaMap = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/r54igpV7vbyth8y16?g_st=ipc";
  
  return (
    <div className="villa-map-section my-12">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-3xl text-center mb-8 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
          Find Our Location
        </h2>
        <div className="glass-card overflow-hidden shadow-2xl">
          <div className="relative h-[500px] bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Sekku Villa Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ja-Ela, Sri Lanka
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined mr-3">map</span>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">directions_car</span>
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">By Car</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">30 mins from Colombo</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">train</span>
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">By Train</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ja-Ela Railway Station</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">flight</span>
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">By Air</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">20 mins from BIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaMap;