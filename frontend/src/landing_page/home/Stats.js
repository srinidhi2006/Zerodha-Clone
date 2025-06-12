import React from 'react';
function Stats() {
    return (  
        <div class='container mt-5 p-5'>
            <div class='row p-5'>
                <div class='col-6 p-5'>
                    <h1>Trust with confidence</h1>
                    <div class='mt-5 mb-3'>
                    <h4>Customer-first always</h4>
                    <p className='text-muted mt-3'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div class='mb-5'>
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted mt-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                    </div>
                    <div class='mb-5'>
                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    </div>
                    <div class='mb-5'>
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                    </div>

                </div>
                <div class='col-6 p-5'>
                    <img src='media\images\images\ecosystem.png' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;