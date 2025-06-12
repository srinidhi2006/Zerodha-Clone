import React from 'react';
function Pricing() {
    return ( 
        <div class='container pd-5 mb-5'>
            <div class='row'>
                <div class='col-4'>
                    <h1 class='mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges.</p>
                <a href='pricing' style={{textDecoration:'none'}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div class='col-2'></div>
                <div class='col-6'>
                    <div class='row text-center'>
                        <div class='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery
                            and direct mutual funds</p>
                        </div>
                        <div class='col p-3 border'>
                            <h1 class='mb-3'>₹20</h1>
                            <p>Intraday and
                            F&O</p>
                        </div>
                    </div>

    
                </div>
            </div>
        </div>
     );
}

export default Pricing;