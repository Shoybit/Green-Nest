import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 ">
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            
            <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                    {item.plantName}
                </h4>
                
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-3 font-medium">
                    {item.category}
                </span>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                </p>

                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <p className="text-gray-600 text-sm font-medium">Price</p>
                        <span className="inline-block bg-[#074d1e] text-white px-3 py-1 rounded-2xl ml-2 text-sm font-semibold">
                            ${item.price}
                        </span>
                    </div>


                
                <div className='flex items-center'>
                    <p className="text-gray-600 text-sm font-medium">Rating</p>
                    <span className="flex items-center bg-[#074d1e] text-white px-3 py-1 rounded-2xl ml-2 text-sm font-semibold">
                        <FaStar className="text-yellow-400 mr-1" />
                        {item.rating}
                    </span>
                </div>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold shadow-md hover:shadow-lg">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Card;