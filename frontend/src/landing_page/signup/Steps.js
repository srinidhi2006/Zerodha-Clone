import React from "react";


function Steps() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Steps to open a demat account with Zerodha</h2>

      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/images/benefits.svg"
            alt="benefits"
            className="img-fluid"
            
          />
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-4">
              <span className="step-number">01</span>
              <span className="ms-3">Enter the requested details</span>
            </li>
            <li className="d-flex align-items-start mb-4">
              <span className="step-number">02</span>
              <span className="ms-3">Complete e-sign & verification</span>
            </li>
            <li className="d-flex align-items-start">
              <span className="step-number">03</span>
              <span className="ms-3">Start investing!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Steps;