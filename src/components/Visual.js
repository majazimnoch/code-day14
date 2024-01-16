import React from 'react';
import './VisualCss.css';
import city from '../assets/city.jpg';
// import clifs from '../assets/clifs.jpg';
// import sand from '../assets/sand.jpg';

const Visual = () => {
    return (
        <div className="image-wrapper">
            <img src={city} alt="city" />
        </div>
    );
};

export default Visual;