import React from 'react';

function CreateTicket() {
    return ( 
       <div className='container'>
        <div className='row py-3'>
            <h4 className='text-muted'>To create a ticket, select a relevant topic</h4>
            <div className='col-4 p-4'>
             
                <h5><i class="fa fa-plus" aria-hidden="true"></i>Account Opening</h5>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2" }}><p className='pt-3'>Resident individual</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Minor</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Non Resident Indian</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>Company, Partnership, HUF and LLP</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Glossary</p></a>
            </div>
            <div className='col-4 p-4'>
                <h5><i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account</h5>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p className='pt-3'>Your Profile</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Account modification</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Client Master Report (CMR) and Depository Participant (DP)</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>Nomination</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Transfer and conversion of securities</p></a>
            </div>
            <div className='col-4 p-4'>
                <h5><i class="fa fa-bar-chart" aria-hidden="true"></i>Kite</h5>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p className='pt-3'>IPO</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>Trading FAQs</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Charts and orders</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>Alerts and Nudges</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>General</p></a>
            </div>
        </div>

        <div className='row py-3'>
            <div className='col-4 p-4'>
                <h5>Funds</h5>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p className='pt-3'>Add money</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Withdraw money</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Add bank accounts</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>eMandates</p></a>
            </div>
            <div className='col-4 p-4'>
                <h5>Console</h5>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p className='pt-3'>Portfolio</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Corporate actions</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Funds statement</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Reports</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Profile</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Segments</p></a>
            </div>
            <div className='col-4 p-4'>
                <h5>Coin</h5>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p className='pt-3'>Understanding mutual funds and Coin</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Coin app</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Coin web</p></a>
                <a href="#" style={{ textDecoration: "none",color: "#4A90E2" }}><p>Transactions and reports</p></a>
                <a href="#" style={{ textDecoration: "none" ,color: "#4A90E2"}}><p>National Pension Scheme (NPS)</p></a>
            </div>
        </div>
       </div>
    );
}

export default CreateTicket;
