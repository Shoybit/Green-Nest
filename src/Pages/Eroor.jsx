import React from 'react';
import eror from '../assets/imgi_25_illustration-error-404-found_123815-25-depositphotos-bgremover.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-50 p-4'>
            <div className='max-w-2xl w-full text-center'>
                <img 
                    src={eror} 
                    alt=" Error Page" 
                    className='w-full h-auto max-w-md mx-auto rounded-lg '
                />
                <div className='mt-6'>
                    <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                        Page Not Found
                    </h1>
                    <p className='text-gray-600 mb-4'>
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>
                    <Link to={'/'}>
                     <button 
                    className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200'
                    >
                        Go Back
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;