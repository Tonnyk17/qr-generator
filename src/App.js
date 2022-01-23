import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContainer } from './pages/MainContainer.jsx';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
};