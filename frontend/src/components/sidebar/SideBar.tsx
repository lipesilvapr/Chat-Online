import React from "react";
import "./styles.css";
import AddIcon from "@mui/icons-material/Add"; // Importa o ícone de "+"
import ButtonIcon from "../buttonIcon/ButtonIcon";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <h2>Chats</h2>
        {/* Adiciona o ícone de "+" como um botão */}
        <ButtonIcon>
          <AddIcon />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default SideBar;
