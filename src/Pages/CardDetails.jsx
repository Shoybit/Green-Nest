import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLoader from '../Components/PageLoader';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const CardDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

useEffect(() => {
    document.title = "Plant Details | Green-Nest";

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if (currentUser) {
            setFormData(prev => ({
                ...prev,
                email: currentUser.email
            }));
        }
    });

    return () => unsubscribe();
}, []);

useEffect(() => {
    const fetchCardDetails = async () => {
        try {
            const res = await fetch(`https://greennest-vercel.vercel.app/plants/${id}`);
            const result = await res.json();
            setCard(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    if (id) fetchCardDetails();
}, [id]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.info('Please login first to book a consultation', {
                position: "top-right",
                autoClose: 3000,
            });
            navigate('/login');
            return;
        }

        const bookingInfo = {
            plantId: card._id,
            plantName: card.plantName,
            userName: formData.name,
             plantImage: card.image, 
            userEmail: formData.email,
            date: new Date().toISOString()
        };

        try {
            const res = await fetch("https://greennest-vercel.vercel.app/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingInfo)
            });

            if (res.ok) {
                toast.success('Booking successfully saved!', {
                    position: "top-right",
                    autoClose: 3000,
                });

                setFormData({ name: '', email: '' });
            } else {
                toast.error('Failed to save booking.');
            }

        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        }
    };

    if (loading) return <PageLoader />;

    return (
        <div className="min-h-screen bg-[#f0fdf4] py-8">
            <div className="max-w-6xl mx-auto px-4">

                {card ? (
                    <>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">

                                {/* Plant Image */}
                                <div className="flex justify-center items-center">
                                    <img
                                        src={card.image}
                                        alt={card.plantName}
                                        className="w-full h-full max-w-md object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Plant Info */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                            {card.plantName}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">{card.description}</p>
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

                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <div className="text-yellow-600 font-semibold">Rating</div>
                                            <div className="text-gray-800 flex items-center">
                                                <FaStar className="text-yellow-400 mr-1" /> {card.rating}
                                            </div>
                                        </div>

                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <div className="text-purple-600 font-semibold">Available Stock</div>
                                            <div className="text-gray-800">{card.availableStock}</div>
                                        </div>
                                    </div>

                                    {/* Booking Form */}
                                    <div className="border-t pt-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Book For Consultation</h3>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                     readOnly 
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg cursor-not-allowed"
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

                        {/* Additional Info Section */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8 p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Info</h3>

                            {/* Care Tips */}
                            {card.careTips && (
                                <div className="mb-4">
                                    <h4 className="text-xl font-semibold text-green-700 mb-2">Care Tips</h4>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {card.careTips.map((tip, idx) => (
                                            <li key={idx}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Benefits */}
                            {card.benefits && (
                                <div className="mb-4">
                                    <h4 className="text-xl font-semibold text-green-700 mb-2">Benefits</h4>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {card.benefits.map((benefit, idx) => (
                                            <li key={idx}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                            )}
                                
                            {/* Placement */}
                            {card.placementSuggestions && (
                                <div className="mb-4">
                                    <h4 className="text-xl font-semibold text-green-700 mb-2">Placement Suggestions</h4>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {card.placementSuggestions.map((place, idx) => (
                                            <li key={idx}>{place}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className='flex justify-end'>
                            <button
                                onClick={() => navigate(-1)} 
                                className="px-4 py-2  bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-200"
                            >
                                Go Back
                            </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">No plant data found.</p>
                )}
            </div>
        </div>
    );
};

export default CardDetails;
