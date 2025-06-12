import React from "react";
import Hero from "./Hero";
import Demat from "./Demat";
import Steps from "./Steps"
import Benefits from "./Benefits";
import Signupfree from "./Signupfree";
function Signup(){
    return(
        <>
        <Hero/>
        <Demat/>
        <Steps/>
        <Benefits/>
        <Signupfree/>
        </>
    )
}
export default Signup;