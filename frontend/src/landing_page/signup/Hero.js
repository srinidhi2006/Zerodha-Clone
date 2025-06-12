import React from "react";
import {useNavigate} from "react-router-dom"
 function Hero(){
     const navigate=useNavigate();
    return(
        <div className="container">
            <div className="row p-5 m-5  ">
                <h1>Open a free demat and trading account online</h1>
                <p className="pl-3 mt-2 text-muted">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row p-3 m-3">
                <div className="col-6 p-3">
                    <img src='media\images\images\account_open.svg' alt="acc_open"/>
                </div>
                <div className="col-6 p-3 mt-3">
                    <h2>Signup now</h2>
                    <p>or track your existing application</p>
                    <button className= "p-2 btn btn-primary fs-5 mb-5" style={{width:"50%",margin:"0 auto "}} onClick={() => navigate("/new")}>Signup</button>
                    <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
            </div>
        </div>
    )
 }
 export default Hero;