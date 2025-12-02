import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({ item }) => {
    const title = item?.plantName || item?.title || 'Untitled Item';
    const price = item?.price !== undefined ? `$${item.price}` : '$0.00';
    const rating = item?.rating || 0;
    const description = item?.description || item?.shortDescription || 'No description available';
    const imageUrl = item?.image || 'https://via.placeholder.com/300x200?text=No+Image';
    const id = item?._id || '';

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
            );
        }
        
        if (hasHalfStar) {
            stars.push(
                <FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />
            );
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FaStar key={`empty-${i}`} className="text-gray-300 text-sm" />
            );
        }
        
        return stars;
    };

    const ratingText = `${rating.toFixed(1)}/5`;

    return (
        <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-200">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Error';
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content Container */}
            <div className="p-5">
                {/* Title */}
                <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-green-700 transition-colors">
                    {title}
                </h4>
                
                {/* Short Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-10">
                    {description}
                </p>
                
                {/* Price and Rating Container */}
                <div className="flex justify-between items-center mb-4">
                    {/* Price */}
                    <div className="flex flex-col">
                        <span className="inline-flex items-center  text-black px-4 py-2 rounded-full text-sm font-bold shadow-md gap-1">
                             <span className="text-[16px] text-black font-medium mb-1">Price:</span>
                            {price}
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-end">
                       
                        <div className="flex items-center space-x-1  rounded-full  text-black px-3 py-2  shadow-md">
                            <div className="flex items-center mr-2 gap-1">
                                 <span className="text-[16px] text-black font-medium mb-1">Rating: </span>
                                {renderStars(rating)}
                            </div>
                            <span className="text-sm font-bold">{ratingText}</span>
                        </div>
                    </div>
                </div>
                

                
                {/* View Details Button */}
                <Link 
                    to={`/card-details/${id}`}
                    className="block"
                    aria-label={`View details for ${title}`}
                >
                    <button className="w-full bg-linear-to-r from-[#00a63e] to-[#00c853] hover:from-[#008c31] hover:to-[#00a63e] text-white py-3 px-4 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0">
                        View Details
                        <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;