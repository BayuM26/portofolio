import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Beranda from "./page/Beranda";
import SPP from "./page/portofolio/SPP";
import reportWebVitals from './reportWebVitals';
import Kontak from './page/Kontak';
import HalamanLogin from './page/HalamanLogin';
import DataPortfolio from './page/DataPortfolio';
import DataSertifikat from './page/DataSertifikat';
import Portfolio from './page/Portfolio';

// const Beranda = React.lazy(() => import("./page/Beranda"))
// const DataPortfolio = React.lazy(() => import("./page/DataPortfolio"))
// const DataSertifikat = React.lazy(() => import("./page/DataSertifikat"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Beranda/>} />
            <Route path="/contact" element={<Kontak/>} />
            <Route path="/SPP" element={<SPP/>} />
            <Route path="/Login" element={<HalamanLogin/>} />
            <Route path="/DataPortfolio" element={<DataPortfolio/>} />
            <Route path="/DataSertifikat" element={<DataSertifikat/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
        </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
