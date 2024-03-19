import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaEthereum } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri'; // Importing login icon

const Header = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>CryptoMint</h1>
        <FaEthereum color='orange' size={"25"} />
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/coins'>Coins</Link></li>
      </ul>
      <div className="login-button">
        <button>
          <RiLoginCircleLine color='white' size={20} />
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Header;


