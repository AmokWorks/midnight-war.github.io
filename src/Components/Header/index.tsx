import React from 'react'
import logo from './mwr-logo-clean.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
    return <div className='header-wrapper'>
        <div className='header-logo'><img src={logo} /></div>
        <div className='CTAs'>
            <span>Pieces</span>
            <span>Contacts us</span>
            <span><FontAwesomeIcon icon={faShoppingBag} /></span></div>
    </div>
}