import React, { useMemo } from "react";
import "./styles.css";

interface MessageProps {
  content: string;
  timestamp: string;
  sender: {
    name: string;
    email: string;
  };
}

// Função que gera uma cor a partir de uma string (email)
const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color =
    "#" +
    ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
    ((hash >> 8) & 0xff).toString(16).padStart(2, "0");

  return color;
};

const Message: React.FC<MessageProps> = ({ content, timestamp, sender }) => {
  // Garante que a cor só muda se o email mudar
  const senderColor = useMemo(
    () => stringToColor(sender.email),
    [sender.email]
  );

  return (
    <div className="message-container">
      <div className="message-info">
        <p className="message-sender" style={{ color: senderColor }}>
          {sender.name}
        </p>
        <p className="time">{timestamp}</p>
      </div>
      <p className="message-text">{content}</p>
    </div>
  );
};

export default Message;
