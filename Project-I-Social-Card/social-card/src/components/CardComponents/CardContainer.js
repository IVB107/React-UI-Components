import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer" className="card-container">
            <CardBanner />
            <CardContent /> 
        </a>
    )
}

export default CardContainer;