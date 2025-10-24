import React from "react";
import plantImg from "../assets/imgi_18_indoor-plants-studio_23-2151022068.jpg";

const PlantOfTheWeek = () => {
  return (
<div>
        <section className="max-w-5xl mx-auto mt-12 bg-white  rounded-lg p-6 border">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
         Plant of the Week
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={plantImg}
          alt="Plant of the Week"
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2 text-green-800">
            Snake Plant Sansevieria
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Known for its air-purifying qualities, the Snake Plant is an easy-to-care
            indoor plant that thrives even in low light. Perfect for your living
            room or office desk!
          </p>
        </div>
      </div>
    </section>
</div>
  );
};

export default PlantOfTheWeek;
