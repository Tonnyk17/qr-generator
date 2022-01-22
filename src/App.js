import React from "react";
import './App.css';
import { Forms } from "./components/Forms";
import { Icon } from "./components/Icon";

export const MainContainer = () => {
    return(
        <>
            <div className="main-container">
                <div className="form-container">
                    <Icon/>
                    <Forms/>
                </div>
            </div>
        </>
    )
}