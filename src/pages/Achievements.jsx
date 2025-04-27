import React from 'react';

const Achievements = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Achievements & Events</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Explore our achievements and events.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 1"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 1</h3>
              <p className="text-gray-700">Description of Event 1.</p>
            </div>

            {/* Gallery Item 2 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 2"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 2</h3>
              <p className="text-gray-700">Description of Event 2.</p>
            </div>

            {/* Gallery Item 3 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 3"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 3</h3>
              <p className="text-gray-700">Description of Event 3.</p>
            </div>

            {/* Gallery Item 4 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 4"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 4</h3>
              <p className="text-gray-700">Description of Event 4.</p>
            </div>

            {/* Gallery Item 5 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 5"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 5</h3>
              <p className="text-gray-700">Description of Event 5.</p>
            </div>

            {/* Gallery Item 6 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 6"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 6</h3>
              <p className="text-gray-700">Description of Event 6.</p>
            </div>

            {/* Gallery Item 7 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 7"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 7</h3>
              <p className="text-gray-700">Description of Event 7.</p>
            </div>

            {/* Gallery Item 8 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 8"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 8</h3>
              <p className="text-gray-700">Description of Event 8.</p>
            </div>

            {/* Gallery Item 9 */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/gal1.jpg"
                alt="Event 9"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Event 9</h3>
              <p className="text-gray-700">Description of Event 9.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
