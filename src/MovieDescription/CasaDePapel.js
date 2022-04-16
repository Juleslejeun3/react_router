import React from 'react'
import { Link } from 'react-router-dom';
import './Description.css';


export default function CasaDePapel() {
    return (
        <div className='description'>
           <p>Casa de papel est un film de braquage produt par netflix</p>
           <a href="https://www.youtube.com/watch?v=0ULjL4cbSro" target="_blank">Bande Annonce</a>
        </div>
    )
}
