import React, { useEffect, useRef } from "react";
import api from "../../services/api";
import Message from "../message/Message";
import "./styles.css";

interface MessageType {
  _id: string;
  content: string;
  timestamp: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const scrollBottomRef = useRef<HTMLDivElement | null>(null);

  const formatDateToBrasilia = (isoDate: string) => {
    const date = new Date(isoDate);
    const brasiliaTime = new Date(date.getTime() + 0 * 60 * 1000);

    const day = String(brasiliaTime.getDate()).padStart(2, "0");
    const month = String(brasiliaTime.getMonth() + 1).padStart(2, "0");
    const year = String(brasiliaTime.getFullYear()).slice(-2);
    const hours = String(brasiliaTime.getHours()).padStart(2, "0");
    const minutes = String(brasiliaTime.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  const fetchMessages = async () => {
    try {
      const response = await api.get("/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  // Rola para a última mensagem sempre que a lista de mensagens for atualizada
  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message
          key={message._id}
          content={message.content}
          timestamp={formatDateToBrasilia(message.timestamp)}
        />
      ))}
      <div ref={scrollBottomRef} />
    </div>
  );
};

export default MessageList;
