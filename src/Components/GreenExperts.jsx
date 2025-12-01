import React from 'react';

const GreenExperts = () => {
  const expertsData = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialization: "Tropical Plants Specialist",
      image: "https://i.ibb.co.com/WpvqBsvq/c0cf38ed613af2909e4b35afcdd937ac.jpg",
      experience: "5+ years",
      bio: "PhD in Botany with expertise in tropical plant care and propagation."
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      specialization: "Succulent & Cacti Expert",
      image: "https://i.ibb.co.com/qY9dPJ6D/d2c3598ad5ee0a7ff81425f8d6efde5e.jpg",
      experience: "9+ years",
      bio: "Specialized in drought-resistant plants and sustainable gardening practices."
    },
    {
      id: 3,
      name: "Emily Johnson",
      specialization: "Organic Gardening Coach",
      image: "https://i.ibb.co.com/S7M20MwY/86f3dc324641520294375de069d57179.jpg",
      experience: "10+ years",
      bio: "Passionate about organic methods and natural pest control solutions."
    },
    {
      id: 4,
      name: "David Kim",
      specialization: "Indoor Plant Consultant",
      image: "https://i.ibb.co.com/Ngn4bpbY/8b1baad216d27ef6236a7f165b290d87.jpg",
      experience: "14+ years",
      bio: "Expert in urban gardening and low-light indoor plant solutions."
    }
  ];

  return (
    <div className=" py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">Meet Our Green Experts</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Learn from our team of passionate plant care specialists with years of experience
        </p>
      </div>

      {/* Experts Grid */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertsData.map((expert) => (
            <div 
              key={expert.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Expert Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Expert Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {expert.name}
                </h3>
                <p className="text-gray-600 font-semibold mb-2">
                  {expert.specialization}
                </p>
                <div className="inline-block bg-green-100 text-gray-600 text-sm px-3 py-1 rounded-full mb-3">
                  {expert.experience} experience
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {expert.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default GreenExperts;