import React, { useContext, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/PageContext";
import { UserContext } from "../../context/UserContext";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const pageContext = useContext(PageContext);
  const userContext = useContext(UserContext);
  if (!pageContext || !userContext) {
    throw new Error("Context must be used within a Provider");
  }
  const { currentPage, setCurrentPage } = pageContext;
  const { user } = userContext;
  const navigate = useNavigate();
  const handleClick = () => {
    if (currentPage === "Home") {
      setCurrentPage("Profile");
      navigate("/profile");
    } else {
      setCurrentPage("Home");
      navigate("/home");
    }
  };

  useEffect(() => {
    console.log("Usuário no contexto:", user);
  }, [user]);
  
  return (
    <header>
      <h1>{title}</h1>
      {user ? <p>Bem-vindo, {user.name}</p> : <p>Bem-vindo, visitante</p>}
      <button onClick={handleClick}>{currentPage === "Home" ? "Profile Page" : "Home Page"}</button>
    </header>
  );
};

export default Header;
