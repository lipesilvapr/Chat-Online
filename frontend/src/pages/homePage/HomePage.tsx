import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/teste") // Chama o endpoint "/teste" do backend
      .then((response) => setMessage(response.data.message))
      .catch((error) =>
        console.error("Erro ao conectar com o backend:", error)
      );
  }, []);

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message || "Conectando..."}</p>
      <button onClick={handleClick}>Profile page</button>
    </div>
  );
};

export default HomePage;
