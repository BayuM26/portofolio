import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Beranda from "./page/Beranda";
import SPP from "./page/portofolio/SPP";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kontak from './page/Kontak';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Beranda/>} />
        <Route path="/contact" element={<Kontak/>} />
        <Route path="/portofolio/SPP" element={<SPP/>} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
