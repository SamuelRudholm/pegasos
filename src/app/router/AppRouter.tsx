import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import {Home} from '../views/Home';
import {About} from '../views/About';

export const AppRouter = () => {

    return(       
        <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
        </Routes>
    )

}