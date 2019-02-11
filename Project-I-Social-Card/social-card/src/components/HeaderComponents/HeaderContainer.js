import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContainer = () => {
    return (
        <div className="container">
            <ImageThumbnail />
            <div className="header-text">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>   
    )
}

export default HeaderContainer;