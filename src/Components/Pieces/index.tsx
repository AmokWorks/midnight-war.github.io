import React from 'react'
import bag from './bag.jpg'
import shirt from './shirt.jpg'
import pant from './pant.jpg'
import './pieces.css'

const mockData = [bag, shirt, pant]
export const Pieces = () => {
    return <div className='pics-wrapper'>
        <h1 style={{ fontFamily: "Potama" }}>Pieces</h1>
        <div className='pics'>{mockData.map(url => {
            return <img className='pic' src={url} alt={url.split('/')[1].split('.')[0]} />
        })}</div>
    </div>
}