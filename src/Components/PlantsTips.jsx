import React from 'react';

const PlantsTips = () => {
  const cardsData = [
    {
      id: 1,
      title: "Watering Guide",
      image: "https://i.ibb.co.com/ycDqfhcx/e08893a771f390bfa69937b5384cbab0.jpg",
      description: "Learn the proper watering techniques for your plants. Overwatering can be as harmful as underwatering. Check soil moisture regularly."
    },
    {
      id: 2,
      title: "Sunlight Requirements", 
      image: "https://i.ibb.co.com/vvzThBMc/2991ce7e450adbafdc6e5401cbd7bc15.jpg",
      description: "Understand different light conditions - direct, indirect, and low light. Position your plants according to their sunlight preferences."
    },
    {
      id: 3,
      title: "Fertilizing Tips",
      image: "https://i.ibb.co.com/gZrNspdy/f84087424ffc2eb2efd09f755adbaa9a.jpg",
      description: "Discover when and how to fertilize your plants. Use the right type of fertilizer and apply it during the growing season."
    },
    {
      id: 3,
      title: "Fertilizing Tips",
      image: "https://i.ibb.co.com/gZrNspdy/f84087424ffc2eb2efd09f755adbaa9a.jpg",
      description: "Discover when and how to fertilize your plants. Use the right type of fertilizer and apply it during the growing season."
    }
  ];

  return (
    <div className=" py-4
     mt-[-30px] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Plant Care Tips </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Essential gardening tips for healthy plants
        </p>
      </div>

      <div className="max-w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsTips;