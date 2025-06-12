import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5 '>
            <div className='row text-center mt-5 text-muted'>
            <h1 className='mt-5' style={{fontSize:'45px', lineHeight:'1.7'}}>Zerodha Products</h1>
            <h5 style={{lineHeight:'1.7'}}>Sleek, modern, and intuitive trading platforms</h5>
           <p  className="mt-3 mb-5"style={{lineHeight:'1.7'}}>Check out our {" "}<a href=''>investment offerings →</a></p>
           </div>
        </div>
     );
}

export default Hero;