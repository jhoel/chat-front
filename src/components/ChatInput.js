
import React from 'react';
import { useState } from 'react';

function ChatInput({ value, onChange, onSend }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Evitar un salto de línea
      onSend(); // Llamar a la función de enviar mensaje

    }
  };

  return (
    <div className="chat-input">
      <input
        className="input-text"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button 
        className="send-button"
        onClick={onSend}>Send</button>
    </div>
  );
}

export default ChatInput;
