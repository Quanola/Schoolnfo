import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {



  return (
    <div className="app-container">
      <div className="date-display">
        Wednesday March 26 2025
      </div>
      <div className="button-group">
        <button className="change-date-button">
          Click
        </button>
        <button className="change-date-button">
          Click
        </button>
      </div>
      <div className="chat-box">
        <div className="message">
          Hello
        </div>
      </div>

      <div className="message-input-container">
      <input 
        type="text" 
        className="message-input" 
        placeholder="Type your message here..."
      />
      <button className="send-button">
        Send
      </button>
    </div>
  </div>
    
  );
}

export default App;
