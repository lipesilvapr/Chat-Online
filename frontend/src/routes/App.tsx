import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import { PageProvider } from "../context/PageContext";
import RegisterPage from "../pages/registerPage/RegisterPage";
import LoginPage from "../pages/loginPage/LoginPage";
import { UserProvider } from "../context/UserContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <PageProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </PageProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
