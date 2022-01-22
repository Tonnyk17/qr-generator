import React from "react";
import '../styles/Button.css';

export const Button = ({buttonText,onClick}) => {
    return (
        <>
            <div className="button-container">
                <div className="button" onClick={onClick}>
                    {buttonText}
                </div>
            </div>
        </>
    )
}