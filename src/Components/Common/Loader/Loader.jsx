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
                        <img src="/logo.png" width="120px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;