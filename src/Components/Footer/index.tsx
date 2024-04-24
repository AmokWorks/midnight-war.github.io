import React from 'react'
import './footer.css'
import { Newsletter } from './Newsletter'

const footerItems = ['Overview', 'Features', 'Pricing', 'Blog']

export const Footer = () => {
    return <div className='foot-wrapper'>
        <div className='top'>
            <div className='items'>
                {footerItems.map(item => <p>{item}</p>)}
            </div>
            <Newsletter />
        </div>
        <div className='bottom'>
            <div className='cpwr'>© 2077 MIDNIGHT WAR. All rights reserved.</div>
            <div className='default'><p>Terms</p><p>Policy</p><p>Cookies</p></div>
        </div>
    </div>
}