import React from "react";
import bitcoin from '../assets/bitcoin.png';
import '../styles/Icon.css';

export const Icon = () => {
    return (
        <>
            <div className="icon-container">
                <img src={bitcoin} alt="Bitcoin" className="icon"/>
            </div>
        </>
    )
}