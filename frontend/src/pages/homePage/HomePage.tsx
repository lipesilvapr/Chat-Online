import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";

const HomePage: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/teste") // Chama o endpoint "/teste" do backend
      .then((response) => setMessage(response.data.message))
      .catch((error) =>
        console.error("Erro ao conectar com o backend:", error)
      );
  }, []);

  return (
    <div className="page">
      <Header title="Home Page" />
      <div className="sidebar-content">
        <SideBar />
        <div className="content">
          <p>{message || "Conectando..."}</p>
          <div className="input-area">
            <input type="text" className="input-text"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
