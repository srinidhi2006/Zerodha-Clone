/*import { useState, useContext } from "react";
import { AuthContext } from "./Authcontent";
import "./signin.css"
export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    signup(username, email, password);
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}*/
import { useState, useContext } from "react";
import { AuthContext } from "./Authcontent";
import { useNavigate } from "react-router-dom"; // for login button redirect
import "./signin.css";
/*
export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    signup(username, email, password);
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>

      {error && <div className="error-message">{error}</div>}

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>

      <div className="auth-footer">
        Already have an account?
        <button className="auth-link" >
          Login
        </button>
      </div>
    </div>
  );
}*/
// ... your imports ...
export default function Signup({ setIsLogin }) {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    try {
      await signup(username, email, password);
      setSuccess("Signup successful! Please login.");
      setTimeout(() => setIsLogin(true), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}


