import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import PageLoader from '../Components/PageLoader';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetSent, setResetSent] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 


     useEffect(() => {
    document.title = "Login | Green-Nest";
  }, []);
    
    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }


    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address first');
            return;
        }

        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setResetSent(true);
                setError('');
            })
            .catch((error) => {
                toast.error(error.message);
            })



            
            
    };

    const handleGoogleLogin = () => {
        setError('');

        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                toast.success('Google login successful:', result.user);
                
                navigate('/');
            })
            .catch((error) => {
                toast.error('Google login error:', error);
                toast.error(error.message);
            })
            .finally(() => {
            });
    };

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to GreenNest
                    </h2>
                </div>

                {!showForgotPassword ? (
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        {error && (
                            <div className="alert alert-error">
                                <span>{error}</span>
                            </div>
                        )}
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="input input-bordered w-full "
                                required
                            />
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="input input-bordered w-full pr-10 "
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <FaEye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                        
                        <div className="text-left">
                            <button 
                                type="button"
                                onClick={() => setShowForgotPassword(true)}
                                className="text-sm text-green-600 hover:text-green-500"
                            >
                                Forgot your password
                            </button>
                        </div>

                <div className="mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                        <FcGoogle className="h-5 w-5 text-red-500" />
                        Continue with Google
                    </button>
                </div>

                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-green-600 border-green-600 hover:bg-green-700"
                            >
                                Login
                            </button>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-sm">
                                Don't have an account? {' '}
                                <Link to="/signup" className="text-green-600 hover:text-green-500 font-medium">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                ) : (
                    
                    <form className="mt-8 space-y-6" onSubmit={handleForgotPassword}>
                        {resetSent ? (
                            <div className="alert alert-success">
                                <span>Password reset email sent! Check your inbox.</span>
                            </div>
                        ) : (
                            <>
                                {error && (
                                    <div className="alert alert-error">
                                        <span>{error}</span>
                                    </div>
                                )}
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Enter your email to reset password
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        className="input input-bordered w-full "
                                        required
                                    />
                                </div>

                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(false)}
                                        className="btn btn-outline w-1/2"
                                    >
                                        Back to Login
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-1/2 bg-green-600 border-green-600 hover:bg-green-700"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </>
                        )}
                        
                        {resetSent && (
                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForgotPassword(false);
                                        setResetSent(false);
                                    }}
                                    className="btn btn-sm btn-ghost"
                                >
                                   Go Back
                                </button>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;