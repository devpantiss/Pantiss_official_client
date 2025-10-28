import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className="overlay">
            <div id="page">
                <div id="container">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3">
                        <img src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761652084/Untitled_design__3_-removebg-preview_ejr5lg.png" width="120px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;