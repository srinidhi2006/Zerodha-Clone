import React from 'react';
function Universe() {
    return ( 
        <div className='container'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            
            
            <div className='col-4 p-3 '>
        <img src='media\images\images\zerodhaFundhouse.png' style={{width:"60%"}}/>
        <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='col-4 p-3' >
        <img src='media\images\images\sensibullLogo.svg'/>
        <p className='text-small text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
            </div>
            <div className='col-4 p-3'>
        <img src='media\images\images\smallcaseLogo.png'/>
        <p className='text-small text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto "}}>
             Signup Now
            </button>
        </div>
    </div>
     );
}

export default Universe;