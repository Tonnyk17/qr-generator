import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Panel } from "./components/Panel.jsx";
import { Reader } from "./components/Reader.jsx";
import { MainContainer } from './pages/MainContainer.jsx';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainContainer/>}/>
                <Route path='/admin' element={<Reader/>}/>
                <Route path='/panel' element={<Panel/>}/>
            </Routes>
        </BrowserRouter>
    )
};