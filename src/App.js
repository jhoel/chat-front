import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChatInput from './components/ChatInput.js';
import ChatMessage from './components/ChatMessage.js';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      <ChatInput
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        onSend={() => {
          setMessages([...messages, { text: newMessage, username: 'jhoel' }]);
          setNewMessage('');
        }}
      />

    </div>
  );
}

export default App;
