import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
