"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Header.css'
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {

    const [isblock, setIsBlock] = useState(false)

    function menuClick() {
        setIsBlock(!isblock)
    }


    return (
        <div className='headerContainer'>
            <div className='logoDiv'>
                <img className='logoImg' src='./logoImg.png' />
            </div>

            <div className='headerOptionsDiv'>
                <Link href='/'>
                    <span className='option'>Home</span>
                </Link>
                <span className='option'>AboutUs</span>
                <Link href='/CryptoPrice'>
                    <span className='option'>Crypto Price</span>
                </Link>

                <span className='option'>tweets</span>
            </div>

            <div className='headerBtnDiv'>
                <Button variant="success" className='loginBtn'>Login</Button>
                <Button variant="success" className='signinBtn'>Sign In</Button>
            </div>

            <div className='headerResponsiveDiv'>
                <label className="hamburger">
                    <input type="checkbox" onClick={menuClick} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            <div className='responsiveMenuDiv'
                style={{ display: isblock ? 'block' : 'none' }}
            >
                <ul className='responsiveMenuList'>
                    <li className='responsiveOption'>Home</li>
                    <li className='responsiveOption'>AboutUs</li>
                    <li className='responsiveOption'>Crypto Price</li>
                    <li className='responsiveOption'>tweets</li>
                    <li className='responsiveOptionL'>Login</li>
                    <li className='responsiveOptionS'>Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header