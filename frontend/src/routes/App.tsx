import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import { PageProvider } from "../context/PageContext";
import RegisterPage from "../pages/registerPage/RegisterPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </PageProvider>
    </BrowserRouter>
  );
};

export default App;
