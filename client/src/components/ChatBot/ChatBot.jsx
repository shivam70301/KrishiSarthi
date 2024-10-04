import React, { useState, useRef, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatBotIcon from '../../assets/ChatBot.png'; // Use the appropriate icon
import { ThemeProvider } from 'styled-components';

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);
  const chatBotRef = useRef(null);

  // Toggle the chatbot display
  const handleClick = () => {
    setShowChat(!showChat);
  };

  // Close chatbot if clicked outside the chatbot area
  const handleClickOutside = (event) => {
    if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
      setShowChat(false);
    }
    
  };

  useEffect(() => {
    if (showChat) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showChat]);

  // Chatbot conversation steps
  const steps = [
    { id: '1', message: 'Hello! How can I assist you?', trigger: '2' },
    { id: '2', user: true, message: 'Feel free to ask me anything!', end: true },
  ];

  // Chatbot theme customization
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#2c3e50',
    headerFontColor: '#fff',
    botBubbleColor: '#2c3e50',
    botFontColor: '#fff',
    userBubbleColor: '#e67e22',
    userFontColor: '#fff',
  };

  return (
    <>
      {/* Chat Button */}
      <button
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 1,
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          padding: 0,
          outline: 'none',
        }}
        onClick={handleClick}
      >
        <img src={ChatBotIcon} alt="Chatbot" style={{ width: '60px', height: '60px' }} />
      </button>

      {/* ChatBot Container */}
      {showChat && (
        <div
          ref={chatBotRef} // This ref is used to detect clicks outside the chatbot
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '90px',
            zIndex: 2,
            width: 'calc(100% - 40px)', // Use calc to take full width minus button space
            maxWidth: '350px', // Limit the max width on larger screens
            height: '85%', // Height adjusted for responsiveness
            maxHeight: '500px', // Limit the max height
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: '#fff', // Ensure background color to highlight the chatbot
          }}
        >
          {/* ChatBot Body */}
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default ChatButton;
