import React, { useState } from "react";
import "./styles.css";
import backgroundAuth from "../../assets/backgroundAuth.jpeg";
import ForumIcon from "@mui/icons-material/Forum";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Login bem-sucedido
      console.log("Login successful:", data);
      setError("");
      alert("Login successful!");
      localStorage.setItem("access_token", data.access_token);
      window.location.href = "/";
    } catch (err) {
      setError((err as Error).message || "An error occurred during login");
    }
  };

  return (
    <div className="login-page">
      <div className="base-part">
        <div className="logo-section">
          <ForumIcon className="logo-icon" />
          <h1>Tag Chat</h1>
        </div>
      </div>
      <img src={backgroundAuth} alt="Logo" />
      <div className="form-section">
        <div className="form-header">
          <h2>Log in</h2>
          <p>Enter to your account</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          <div className="form-footer">
            <div className="form-footer-text">
              <p>Don't have an account?</p>
              <a href="/register">Register</a>
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;