import React from "react";
import { Route, Routes } from "react-router-dom";


import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders"

import Positions from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import App_Page from "./App";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     <GeneralContextProvider>  
      <WatchList />
      </GeneralContextProvider>
       
     
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="orders" element={<Orders/>} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<App_Page/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

