import React from "react";
import "./styles.css"

interface MessageProps {
    content: string;
    timestamp: string;
}

const Message: React.FC<MessageProps> = ({content, timestamp}) => {
    return (
        <div className="message-container">
            <p className="time">{timestamp}</p>
            <p className="message-text">{content}</p>
        </div>
    );
};

export default Message;