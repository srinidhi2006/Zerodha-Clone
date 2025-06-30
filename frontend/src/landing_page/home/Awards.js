import React from 'react';
function Awards() {
    return ( 
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-6 p-5">
                <img src='media/images/images/largestBroker.svg' class='mt-5'/> 
                </div>
                <div class='col-6 pd-5 mt-5'>
                  <h1>Largest stock broker in india</h1>
                  <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div class='row'>
                    <div class='col-6'>
                    <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
                </ul>
                    </div>
                    <div class='col-6'>
                    <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
                    </div>
                </div>
                <img src='media\images\images\pressLogos.png' style={{width:"90%"}}/>
                
                </div>
            </div>
        </div>
     );
}

export default Awards;