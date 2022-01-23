import React from "react";
import './MainContainer.css';
import { Forms } from "../components/Forms";

export const MainContainer = () => {
    return(
        <>
            <div className="main-container">
                <div className="form-container">
                    <Forms/>
                </div>
            </div>
        </>
    )
}