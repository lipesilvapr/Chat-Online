import React from "react";
import "./styles.css";
import backgroundAuth from "../../assets/backgroundAuth.jpeg";
import ForumIcon from "@mui/icons-material/Forum";

const RegisterPage: React.FC = () => {
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
        <form className="register-form">
          <label>
            <input className="form-input" type="text" placeholder="Name" />
          </label>
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
          <label>
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
            />
          </label>
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
