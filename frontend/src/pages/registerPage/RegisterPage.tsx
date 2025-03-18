import React, { useState } from "react";
import "./styles.css";
import backgroundAuth from "../../assets/backgroundAuth.jpeg";
import ForumIcon from "@mui/icons-material/Forum";
import api from "../../services/api";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      
      console.log("Registration successful:", response.data);
      setError("");
      alert("Registration successful! Please log in.");
      
      window.location.href = "/login";
    } catch (err) {
      setError((err as Error).message || "An error occurred during registration");
    }
  };

  return (
    <div className="register-page">
      <div className="base-part">
        <div className="logo-section">
          <ForumIcon className="logo-icon" />
          <h1>Tag Chat</h1>
        </div>
      </div>
      <img src={backgroundAuth} alt="Logo" />
      <div className="form-section">
        <div className="form-header">
          <h2>Sign up</h2>
          <p>Create an account</p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
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
          <label>
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          <div className="form-footer">
            <div className="form-footer-text">
              <p>Already have an account?</p>
              <a href="/login">Login</a>
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;