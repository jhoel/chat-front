// create chat message component

import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className="chat-message user-message">
      <div className="chat-message-username">{message.username}</div>
      <div className="chat-message-text">{message.text}</div>
    </div>
  );
}

export default ChatMessage;
