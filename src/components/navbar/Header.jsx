import React, { useState } from 'react';
import logo from '../../assets/QUICK_FILLER_logo_1_1-removebg-preview 1.png';
import './Header.css';
import { Link } from 'react-router-dom';
import ConnectWallet from '../connect/ConnectWallet';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({className}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <header className={className}>
      <Link to='/' className='logo'>
        <img src={logo} alt='logo' />
      </Link>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <Link to='/about' className='elements'>
          About us
        </Link>

        <Link to='/services' className='elements'>
          Services
        </Link>

        <Link to='/product' className='elements'>
          Product
        </Link>

        <Link to='/more' className='elements'>
          More
        </Link>
        <ConnectWallet btnText="Connect Wallet" />
      </div>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ colyor: '#fff' }} />
        )}
      </div>
    </header>
  );
}

export default Header;
