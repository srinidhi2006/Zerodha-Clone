import React, { useState, useEffect } from "react";

import axios from "axios";

import TopBar from "./TopBar";


const Orders = () => {
  const [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders").then((res)=>{
      setAllOrders(res.data);
    });
  },[]);
  return (
    
    <>
    <TopBar/>
      <h3 className="title">Orders({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>price</th>
            <th>Mode</th>
            
          </tr>

          {allOrders.map((stock, index) => {
           

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
               
                <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                
                
                
              </tr>
            );
          })}
        </table>
      </div>

      
     
    </>
  );
};

export default Orders;