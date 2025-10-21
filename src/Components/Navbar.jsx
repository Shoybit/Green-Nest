import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import ActiveLink from './ActiveLink'; 

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return (
            <div className="navbar bg-base-100 shadow-sm w-full h-25 min-h-0 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="skeleton h-6 w-32"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="navbar bg-base-100 shadow-sm w-full h-25 min-h-0 sticky top-0 z-50"> 
            <div className="container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 w-40 p-2 shadow">
                            <li>
                                <ActiveLink to="/">
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/plants">
                                    Plants
                                </ActiveLink>
                            </li>
                            {user && (
                                <li>
                                    <ActiveLink to="/myprofile">
                                        Profile
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    
                    <ActiveLink to="/" className="flex items-center space-x-1 ml-1">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center"> 
                            <img 
                                src="/green_nest_packaging_solutions_logo-depositphotos-bgremover.png" 
                                alt="GreenNest Logo" 
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                        <span className="text-lg font-semibold text-green-600">GreenNest</span>
                    </ActiveLink>
                </div>

                
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal menu-sm px-1 space-x-1">
                            <li>
                                <ActiveLink to="/" className="py-1 px-2 text-sm">
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/plants" className="py-1 px-2 text-sm">
                                    Plants
                                </ActiveLink>
                            </li>
                            {user && (
                                <li>
                                    <ActiveLink to="/myprofile" className="py-1 px-2 text-sm">
                                        Profile
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>

                   
                    <div>
                        <div className="flex items-center space-x-2">
                            {user ? (
                               
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar btn-sm">
                                        <div className="w-8 h-8 rounded-full border-2 border-green-500 overflow-hidden">
                                            {user.photoURL ? (
                                               
                                                <img 
                                                    src={user.photoURL} 
                                                    alt="Profile-picture" 
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                    
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                            ) : (
                                                
                                                <div className="w-full h-full bg-green-200 flex items-center justify-center">
                                                    <span className="text-green-700 text-xs font-bold">
                                                        {user.displayName}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 w-40 p-2 shadow">
                                        <li className="px-2 py-1 border-b border-gray-200">
                                            <div className="flex items-center space-x-2">
                                                <p className="text-sm font-semibold">
                                                    {user.displayName || 'User'}
                                                </p>
                                            </div>
                                        </li>
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            ) : (
                                
                                <div className="flex items-center space-x-2">
                                    <ActiveLink to="/login">
                                        <button className="btn btn-sm btn-primary bg-green-600 border-green-600 hover:bg-green-700 text-white">
                                            Login
                                        </button>
                                    </ActiveLink>
                                    <ActiveLink to="/signup">
                                        <button className="btn btn-sm btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                                            Register
                                        </button>
                                    </ActiveLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;