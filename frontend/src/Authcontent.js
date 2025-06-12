import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
   
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.username);
    /*catch (err) {
      alert(err.response.data.message || "Login failed");
    }*/
  };

  const signup = async (username, email, password) => {
    try {
      await axios.post("http://localhost:3002/api/auth/signup", {
        username,
        email,
        password,
      });
      alert("Signup successful. Please login!");
    } catch (err) {
      alert(err.response.data.message || "Signup failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
