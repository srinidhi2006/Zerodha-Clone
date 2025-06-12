import React from "react";
import {useNavigate} from "react-router-dom"
function Signupfree(){
    const navigate=useNavigate();
    return(
        <div className="container text-center p-5 m-5">
            <h2>Open a Zerodha account</h2>
            <p>Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
            <button className="btn btn-primary px-4 py-2 fs-5" style={{width:"20%",margin:"0 auto "}} onClick={() => navigate("/new")}>Sign up</button>
        </div>
    )
}
export default Signupfree;