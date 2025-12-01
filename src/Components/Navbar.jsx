import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import ActiveLink from './ActiveLink'; 

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
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
        <nav className='sticky top-0 z-50 '>
                    <div className="navbar bg-base-100 w-full bg-linear-to-br from-green-900 to-green-700 text-white shadow-sm  min-h-0 "> 
            <div className="container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-50 mt-2 w-44 p-2 shadow bg-linear-to-br from-green-900 to-green-700 text-white">
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
                                       My Profile
                                    </ActiveLink>
                                </li>
                            )}
                            

                        </ul>
                    </div>
                    
                    <Link to="/" className="flex items-center space-x-1 ml-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center"> 
                            <img 
                                src="/green_nest_packaging_solutions_logo-depositphotos-bgremover.png" 
                                alt="GreenNest Logo" 
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <span className="text-2xl font-semibold  bg-linear-to-r from-green-400 to-green-200 bg-clip-text text-transparent">GreenNest</span>
                    </Link>
                </div>

                
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal menu-sm px-1 space-x-5">
                            <li>
                                <ActiveLink to="/" className="py-1 px-2 text-[16px] font-semibold">
                                    Home
                                </ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to="/plants" className="py-1 px-2 text-[16px] font-semibold">
                                    Plants
                                </ActiveLink>
                            </li>
                            {user && (
                                <li>
                                    <ActiveLink to="/myprofile" className="py-1 px-2 text-[16px] font-semibold">
                                        My Profile
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>

                   
                    <div>
                        <div className="flex items-center space-x-4 ml-4">
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
                                                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#007032] rounded-box z-50 mt-2 w-40 p-2 shadow">
                                        <li className="py-1 border-b border-gray-200">
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
                                <>
                                    {/* Desktop view login/register buttons */}
                                    <div className="hidden lg:flex items-center space-x-4">
                                        <ActiveLink to="/login">
                                            <button className="btn btn-sm btn-primary bg-green-600 border-green-600 hover:bg-green-700 text-[16px] font-semibold text-white">
                                                Login
                                            </button>
                                        </ActiveLink>
                                        <ActiveLink to="/signup">
                                            <button className="btn btn-sm btn-outline border-green-600 text-white hover:bg-green-600 text-[16px] font-semibold hover:text-white">
                                                Register
                                            </button>
                                        </ActiveLink>
                                    </div>
                                    
                                    {/* Mobile view login/register dropdown */}
                                    <div className="dropdown dropdown-end lg:hidden">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                                            <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#007032] rounded-box z-50 mt-2 w-40 p-2 shadow">
                                            <li>
                                                <ActiveLink to="/login" className="py-1 px-2 text-[16px] font-semibold">
                                                    Login
                                                </ActiveLink>
                                            </li>
                                            <li>
                                                <ActiveLink to="/signup" className="py-1 px-2 text-[16px] font-semibold">
                                                    Register
                                                </ActiveLink>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;