import React from "react";


function Demat() {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-5">Investment options with Zerodha demat account</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <img src="media\images\images\stocks1.svg" alt="stocks" className="mb-2" />
          <h4>Stocks</h4>
          <p>Invest in all exchange-listed securities</p>
        </div>
        <div className="col-md-6 mb-4">
          <img src="media\images\images\mutual_funds1.svg" alt="mutual funds" className="mb-2" />
          <h4>Mutual funds</h4>
          <p>Invest in commission-free direct mutual funds</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <img src="media\images\images\ipo.svg" alt="ipo" className="mb-2" />
          <h4>IPO</h4>
          <p>Apply to the latest IPOs instantly via UPI</p>
        </div>
        <div className="col-md-6 mb-4">
          <img src="media\images\images\futures.svg" alt="futures" className="mb-2" />
          <h4>Futures & options</h4>
          <p>Hedge and mitigate market risk through simplified F&O trading</p>
        </div>
      </div>

      <button className="btn btn-primary px-4 py-2 fs-5">Explore Investments</button>
    </div>
  );
}

export default Demat;
