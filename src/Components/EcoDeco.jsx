import React from "react";
import img1 from '../assets/imgi_5_huge-potted-monstera-plant-room_23-2149427969.jpg'
import img2 from '../assets/imgi_14_close-up-potted-plant-hanging-basket_1048944-27590330.jpg'
import img3 from '../assets/imgi_33_top-view-wedding-menu-concept_23-2147801822.jpg'

const EcoDeco = () => {
  const ideas = [
    {
      id: 1,
      title: "Living Room Green Corner",
      desc: "Add large leafy plants near windows to create a natural, refreshing corner.",
      img: img1,
    },
    {
      id: 2,
      title: "Hanging Plants for Small Spaces",
      desc: "Use hanging pots to decorate balconies or study corners with minimal space.",
      img: img2,
    },
    {
      id: 3,
      title: "Eco-Friendly Table Setup",
      desc: "Decorate your dining or work table with small succulents or bonsai plants.",
      img: img3,
    },
    {
      id: 4, 
      title: "Bathroom Plant Decor",
      desc: "Moisture-loving plants like ferns thrive in bathroom humidity.",
      img: img1,
    },
  ];

  return (
    <section className="py-12 bg-[#f0fdf4]">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Eco Decor Ideas
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover creative ways to style your space with plants — from hanging pots to green corners that make your home both beautiful and eco-friendly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ideas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoDeco;