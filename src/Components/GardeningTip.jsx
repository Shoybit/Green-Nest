import React from "react";
import tipImg from "../assets/imgi_73_front-view-potted-plant-wooden-surface_140725-103323.jpg";

const GardeningTip = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 bg-white rounded-lg p-6 border">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
         Gardening Tip of the Day
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2 text-green-800">
            Watering Smartly
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Always water your plants early in the morning or late in the evening.
            This helps reduce evaporation and ensures the roots absorb more
            moisture — keeping your plants fresh all day long.
          </p>
        </div>
        <img
          src={tipImg}
          alt="Gardening Tip"
          className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default GardeningTip;
