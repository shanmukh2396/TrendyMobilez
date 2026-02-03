import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      newErrors.username = "Username is required";
    } else if (trimmedUsername.length < 4) {
      newErrors.username = "Username must be at least 4 characters";
    } else if (trimmedUsername.length > 30) {
      newErrors.username = "Username cannot exceed 30 characters";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (password.length > 128) {
      newErrors.password = "Password is too long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate login delay (in real app → send to backend)
    setTimeout(() => {
      localStorage.setItem("username", username.trim());
      alert("Login successful!");
      navigate("/");
      setIsSubmitting(false);
    }, 1200);
  };

  const isFormValid =
    username.trim().length >= 4 &&
    password.length >= 6 &&
    !isSubmitting;

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <i className="fa-solid fa-cart-shopping logo-icon"></i>
          <h2>Login to Trendy Mobilez</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={`input ${errors.username ? "input-error" : ""}`}
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errors.username) setErrors({ ...errors, username: "" });
              }}
              onBlur={validateForm}
              required
              minLength={4}
              maxLength={30}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          {/* Password */}
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`input ${errors.password ? "input-error" : ""}`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                onBlur={validateForm}
                required
                minLength={6}
                maxLength={128}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            {isSubmitting ? "Logging in..." : "Login Now"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="signup-link">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
