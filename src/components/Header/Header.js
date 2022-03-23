import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to My Site</h1>
            <nav className='menu'>
            <a href="/home">Home</a>
            <a href="/component">Component</a>
            <a href="/aboutUs">About Us</a>
            </nav>
        </div>
    );
};

export default Header;