import React from "react";
import './newsletter.css'

export const Newsletter = () => {
    return <div className="nl-wwrapper">
        <p>Stay up to date</p>
        <span className="inputs">
            <input type="text" style={{ borderRadius: '5px', padding: '0.5rem' }} placeholder="Enter your email" />
            <button style={{ borderRadius: '7px', padding: '0 10px', fontWeight: '700' }}>Subscribe</button>
        </span>
    </div>
}