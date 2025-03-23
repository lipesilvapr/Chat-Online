import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import "./styles.css";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import MessageList from "../../components/messageList/MessageList";
import { UserContext } from "../../context/UserContext"; 

const HomePage: React.FC = () => {
  const { user, token } = useContext(UserContext)!;

  const [bmessage, setbMessage] = useState("");
  const [messageBd, setMessageBd] = useState("");

  useEffect(() => {
    api
      .get("/teste")
      .then((response) => setbMessage(response.data.message))
      .catch((error) =>
        console.error("Erro ao conectar com o backend:", error)
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!messageBd) {
      alert("Digite uma mensagem para enviar");
      return;
    }

    if (!user) {
      alert("Usuário não autenticado!");
      return;
    }

    try {
      await api.post(
        "/messages",
        {
          content: messageBd,
          sender: {
            name: user.name,
            email: user.email,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessageBd("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert("Erro ao enviar mensagem. Verifique o console para mais informações.");
    }
  };

  return (
    <div className="page">
      <Header title="Home Page" />
      <div className="sidebar-content">
        <SideBar />
        <div className="content">
          <div className="text-area">
            {/* <p>{bmessage || "Conectando..."}</p> */}
            <MessageList />
          </div>
          <div className="input-area">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input-text"
                value={messageBd}
                onChange={(e) => setMessageBd(e.target.value)}
                placeholder="Digite sua mensagem"
              />
              <button className="submit" type="submit">
                <ArrowUpwardRoundedIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
