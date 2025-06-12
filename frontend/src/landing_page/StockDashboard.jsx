/*import React ,{useState,useEffect} from "react";
const API_KEY=process.env.REACT_APP_FINNHUB_API_KEY;
const StockDashboard=()=>{
    const[symbol,setSymbol]=useState("AAPL");
    const[quote,setQuote]=useState(null);
    const[news,setNews]=useState([]);
    const[userInput,setUserInput]=useState("");
    
    useEffect(()=>{
        const fetchQuote = async()=>{
            try{
                const res=await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`

                );
                const data=await res.json();
                setQuote(data);
            }
            catch(error){
                console.log("Error fetching stock quote: ",error);
            }
        };
        fetchQuote();
        const quoteinterval=setInterval(fetchQuote,60000);
        return() => clearInterval(quoteinterval);
       },[symbol]);
       

       useEffect(()=>{
        const fetchNews=async()=>{
            const today=new Date().toISOString().slice(0,10);
            const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
            try{
                const res=await fetch(
                    `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${yesterday}&to=${today}&token=${API_KEY}`
                );
                const data=await res.json();
                setNews(data.slice(0,5));
            }
            catch(err){
                console.error("Error fetching news",err);
            }
        };
        fetchNews();
        const newsInterval=setInterval(fetchNews,60000);
        return()=>clearInterval(newsInterval);
       },[symbol]);
       const handleSearch=()=>{
        if(userInput.trim()){
            setSymbol(userInput.trim().toUpperCase());
            setUserInput("");
        }
       };
       return(
        <div className="stock-dashboard">
      <h2>📊 Live Stock Dashboard</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter symbol (e.g. AAPL, TCS.BSE)"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="quote">
        <h3>{symbol} Quote</h3>
        {quote ? (
          <ul>
            <li>Current Price: ${quote.c}</li>
            <li>High: ${quote.h}</li>
            <li>Low: ${quote.l}</li>
            <li>Open: ${quote.o}</li>
            <li>Previous Close: ${quote.pc}</li>
          </ul>
        ) : (
          <p>Loading quote...</p>
        )}
      </div>

      <div className="news">
        <h3>📰 Latest News for {symbol}</h3>
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.headline} width={100} />
              <div>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <h4>{item.headline}</h4>
                </a>
                <p>{item.summary.slice(0, 120)}...</p>
                <small>Source: {item.source}</small>
              </div>
            </div>
          ))
        ) : (
          <p>No recent news available.</p>
        )}
      </div>
    </div>
       );
       
};
export default StockDashboard;*/

import React, { useState, useEffect } from "react";
import "./StockDashboard.css";

const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;

const StockDashboard = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [quote, setQuote] = useState(null);
  const [news, setNews] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Fetch stock quote
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );
        const data = await res.json();
        setQuote(data);
      } catch (err) {
        console.error("Error fetching quote:", err);
      }
    };
    fetchQuote();
    const interval = setInterval(fetchQuote, 60000);
    return () => clearInterval(interval);
  }, [symbol]);

  // Fetch latest news
  useEffect(() => {
    const fetchNews = async () => {
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000)
        .toISOString()
        .slice(0, 10);
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${yesterday}&to=${today}&token=${API_KEY}`
        );
        const data = await res.json();
        setNews(data.slice(0, 5));
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchNews();
    const interval = setInterval(fetchNews, 60000);
    return () => clearInterval(interval);
  }, [symbol]);

  const handleSearch = () => {
    if (userInput.trim()) {
      setSymbol(userInput.trim().toUpperCase());
      setUserInput("");
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📈 Live Stock Dashboard</h2>

      <div className="search-bar">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter symbol (e.g. AAPL)"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="card">
        <h3>{symbol} Quote</h3>
        {quote ? (
          <ul>
            <li>Current Price: ${quote.c}</li>
            <li>High: ${quote.h}</li>
            <li>Low: ${quote.l}</li>
            <li>Open: ${quote.o}</li>
            <li>Previous Close: ${quote.pc}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="card">
        <h3>📰 Latest News for {symbol}</h3>
        {news.length ? (
          news.map((item, idx) => (
            <div className="news-item" key={idx}>
              {item.image && (
                <img src={item.image} alt="news" className="news-image" />
              )}
              <div className="news-content">
                <a href={item.url} target="_blank" rel="noreferrer">
                  <strong>{item.headline}</strong>
                </a>
                <p>{item.summary.slice(0, 100)}...</p>
                <small>Source: {item.source}</small>
              </div>
            </div>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default StockDashboard;


