import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import LocationList from './LocationList.js';
import LocationDetails from './LocationDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocationList />}/>
        <Route path="/map/:room" element={<LocationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
