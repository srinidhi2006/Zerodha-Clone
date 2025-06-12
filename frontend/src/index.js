import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './landing_page/home/Homepage';
import App from "./test/App"
import Aboutpage from './landing_page/about/Aboutpage';
import Products from './landing_page/products/products';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import StockDashboard from './landing_page/StockDashboard';
import DashboardEmbed from './landing_page/DashboardEmb';
import Signup from "./landing_page/signup/signuppage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
     <Route path="/Dashboard" element={<DashboardEmbed />}/>
    <Route path="/About" element={<Aboutpage/>}/>
    <Route path="/Product" element={<Products/>}/>
    <Route path="/Pricing" element={<PricingPage/>}/>
    <Route path="/Support" element={<SupportPage/>}/>
    <Route path="/view" element={<StockDashboard/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/new" element={<App/>}/>
    
  </Routes>
  <Footer/>
 
  </BrowserRouter>

  
);


