import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ActiveLink = ({ to, children, className = '' }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const activeClass = "border-b-2 border-green-500 text-green-600 font-semibold";
    const inactiveClass = "hover:text-green-500 transition-colors";

    const combinedClass = `${className} ${isActive ? activeClass : inactiveClass}`;

    return (
        <Link to={to} className={combinedClass}>
            {children}
        </Link>
    );
};

export default ActiveLink;