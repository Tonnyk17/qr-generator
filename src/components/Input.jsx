import React from "react";
import '../styles/Input.css';

export const Input = ({type,placeholder ,value, labelText, onChange}) => {
    return (
        <>
            <div className="input-container">
                <label htmlFor='' className="label-component">{labelText}</label>
                <input type={type} placeholder={placeholder} className="input-component" name={value} onChange={onChange}/>
            </div>
        </>
    )
}