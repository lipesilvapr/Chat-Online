import React, { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import Message from "../message/Message";
import { io, Socket } from "socket.io-client"; // <- IMPORTANTE
import "./styles.css";

interface MessageType {
  _id: string;
  content: string;
  timestamp: string;
  sender: {
    name: string;
    email: string;
  };
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const api_url = import.meta.env.VITE_API_URL

  const formatDateToBrasilia = (isoDate: string) => {
    const date = new Date(isoDate);
    const brasiliaTime = new Date(date.getTime());

    const day = String(brasiliaTime.getDate()).padStart(2, "0");
    const month = String(brasiliaTime.getMonth() + 1).padStart(2, "0");
    const year = String(brasiliaTime.getFullYear()).slice(-2);
    const hours = String(brasiliaTime.getHours()).padStart(2, "0");
    const minutes = String(brasiliaTime.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  // Carrega mensagens antigas uma única vez quando o componente monta
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      }
    };

    fetchMessages();
  }, []);

  // Configura o socket apenas uma vez
  useEffect(() => {
    // Cria a conexão com o backend Socket.io
    const socket = io(api_url); // <- Ajuste a URL conforme o seu backend!
    socketRef.current = socket;

    // Ouve o evento "newMessage" do servidor
    socket.on("newMessage", (newMessage: MessageType) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Cleanup na desmontagem do componente
    return () => {
      socket.disconnect();
    };
  }, []);

  // Scroll para a última mensagem sempre que atualizar a lista
  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message
          key={message._id}
          content={message.content}
          timestamp={formatDateToBrasilia(message.timestamp)}
          sender={message.sender || { name: "Usuário Desconhecido", email: "" }}
        />
      ))}
      <div ref={scrollBottomRef} />
    </div>
  );
};

export default MessageList;
