import React from "react";
import "./styles.css";
import backgroundAuth from "../../assets/backgroundAuth.jpeg";
import ForumIcon from "@mui/icons-material/Forum";

const LoginPage: React.FC = () => {
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
        <form className="login-form">
          <label>
            <input className="form-input" type="text" placeholder="Email" />
          </label>
          <label>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
            />
          </label>
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
