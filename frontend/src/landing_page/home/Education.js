import React from 'react';
function Education() {
    return ( 
        <div class='container'>
            <div class='row'>
                <div class='col-6'>
                       <img src='media\images\images\education.svg' alt='eduaction'/>
                </div>
                <div class='col-6 mt-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='Varsity' style={{textDecoration:'none'}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='TradingQ&A'  style={{textDecoration:'none'}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        
     );
}

export default Education;