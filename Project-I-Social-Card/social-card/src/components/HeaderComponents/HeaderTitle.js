import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="title-container">
            <p className="name"><strong>Lambda School</strong></p>
            <p> @LambdaSchool</p>
            <p> •</p>
            <p> 26 jan</p>
        </div>
    )
}

export default HeaderTitle;