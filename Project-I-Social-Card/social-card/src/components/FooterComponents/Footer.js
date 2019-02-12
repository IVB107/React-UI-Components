import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="icon-container">
                <i className="far fa-comment"></i>
                <p>9</p>
            </div>
            <div className="icon-container">
                <i className="fas fa-sync"></i>
                <p></p>
            </div>
            <div className="icon-container">
                <i className="far fa-heart"></i>
                <p>12</p>
            </div>
            <div className="icon-container">
                <i className="far fa-envelope"></i>
                <p></p>
            </div>
        </div>
    )
}

export default Footer;