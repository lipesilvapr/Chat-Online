import React, { useContext } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/PageContext";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const pageContext = useContext(PageContext);
  if (!pageContext) {
    throw new Error("PageContext must be used within a PageProvider");
  }
  const { currentPage, setCurrentPage } = pageContext;
  const navigate = useNavigate();
  const handleClick = () => {
    if (currentPage === "Home") {
      setCurrentPage("Profile");
      navigate("/profile");
    } else {
      setCurrentPage("Home");
      navigate("/");
    }
  };
  return (
    <header>
      <h1>{title}</h1>
      <button onClick={handleClick}>{currentPage === "Home" ? "Profile Page" : "Home Page"}</button>
    </header>
  );
};

export default Header;
