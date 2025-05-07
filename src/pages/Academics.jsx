import React from 'react';
import { useEffect } from 'react';

const Academics = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Welcome to the Academics page. 
          </p>
        </div>
      </div>

      {/* Academic Sections */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Courses Section */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad1.jpg"
                alt="Courses"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Courses</h2>
              <p className="text-gray-700">Information about the courses we offer.</p>
            </div>

            {/* Faculty Section */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad2.jpg"
                alt="Faculty"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Faculty</h2>
              <p className="text-gray-700">Meet our experienced and dedicated faculty members.</p>
            </div>

            {/* Research Section */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad3.jpg"
                alt="Research"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Research</h2>
              <p className="text-gray-700">Learn about the research initiatives and projects we are involved in.</p>
            </div>

            {/* Additional Sections */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad4.jpg"
                alt="Conference Room"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Conference Room</h2>
              <p className="text-gray-700">Our conference room for academic discussions and meetings.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad5.jpg"
                alt="Reception"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Reception</h2>
              <p className="text-gray-700">Our reception area for visitors and students.</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/acad6.jpg"
                alt="Library"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Library</h2>
              <p className="text-gray-700">Our library with a vast collection of academic resources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
