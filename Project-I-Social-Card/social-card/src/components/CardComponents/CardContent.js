import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            {/* More Stuff? */}
            <p><strong>Get started with React</strong></p>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="card-url">reactjs.org</p>
        </div>
    )
}

export default CardContent;