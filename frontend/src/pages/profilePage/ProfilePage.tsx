import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleClick}>Home Page</button>
    </div>
  );
};

export default ProfilePage;
