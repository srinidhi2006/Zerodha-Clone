
import React from "react";


function Benefits() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/images/benefits2.svg"
            alt="benefits graphic"
            className="img-fluid"
            style={{ maxHeight: "600px" }}
          />
          <h2 className="mt-4 text-md-start text-center text-muted">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* Right Text */}
        <div className="col-md-6">
          <div className="mb-4">
            <h5>Unbeatable pricing</h5>
            <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
          </div>
          <div className="mb-4">
            <h5>Best investing experience</h5>
            <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
          </div>
          <div className="mb-4">
            <h5>No spam or gimmicks</h5>
            <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
          </div>
          <div>
            <h5>The Zerodha universe</h5>
            <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
