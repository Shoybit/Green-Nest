import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); 
    const [card, setCard] = useState(null); 
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        const cardDetails = data.find((singleCard) => singleCard.id == id);
        setCard(cardDetails);
    }, [data, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        toast.success('Booking successfuly.', {
            position: "top-right",
            autoClose: 3000,
        });
        
        setFormData({
            name: '',
            email: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Plant Details</h1>
                
                {card ? (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            <div className="flex justify-center items-center">
                                <img 
                                    src={card.image} 
                                    alt={card.plantName} 
                                    className="w-full h-full max-w-md object-cover rounded-lg shadow-md"
                                />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                        {card.plantName}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {card.description || "A beautiful plant that adds natural beauty to your space."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="text-green-600 font-semibold">Category</div>
                                        <div className="text-gray-800">{card.category}</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="text-blue-600 font-semibold">Price</div>
                                        <div className="text-gray-800 font-bold text-xl">${card.price}</div>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg ">
                                        <div className="text-yellow-600 font-semibold">Rating</div>
                                        
                                        <div className="text-gray-800 flex  items-center">
                                            <FaStar className="text-yellow-400 mr-1" />
                                             {card.rating}</div>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <div className="text-purple-600 font-semibold">Available Stock </div>
                                        <div className="text-gray-800">{card.availableStock}</div>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Book This Plant</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>

                                        <button 
                                            type="submit"
                                            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                                        >
                                            Book Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''}
            </div>
        </div>
    );
};

export default CardDetails;