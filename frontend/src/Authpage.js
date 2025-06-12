import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./signin.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-page-container">
      <div className="form-switch">
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
      </div>

      {isLogin ? <Login /> : <Signup setIsLogin={setIsLogin} />}
    </div>
  );
}
