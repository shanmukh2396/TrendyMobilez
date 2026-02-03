import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginbtnLogic = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      alert("Please enter username");
      return;
    }

    if (trimmedUsername.length < 4) {
      alert("Username must be at least 4 characters");
      return;
    }

    if (!password) {
      alert("Please enter password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("username", trimmedUsername);
    navigate("/");
  };

  return (
    <div className="login">
      <i className="fa-solid fa-cart-shopping logo-icon"></i>
      <h2>Login Here!</h2>

      {/* These two lines were missing value + onChange */}
      <input
        type="text"
        className="input"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password" // ← changed to password type (important!)
        className="input"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={loginbtnLogic}>
        Login Now
      </button>

      <Link
        to="/register"
        style={{ color: "blue", textDecoration: "none", fontSize: "14px" }}
      >
        Signup here!!!
      </Link>
    </div>
  );
};

export default LoginForm;
