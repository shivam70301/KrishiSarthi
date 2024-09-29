import React from 'react';
import ChatBot from '../../assets/ChatBot.png';

const ChatButton = () => {
  const handleClick = () => {
    // Add your button click logic here
    console.log('Chat button clicked!');
  };

  return (
    <button
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        padding: 0, // Ensures no padding
        outline: 'none', // Removes any focus outline
      }}
      onClick={handleClick}
    >
      <img src={ChatBot} alt="Chatbot" style={{ width: '60px', height: '60px' }} />
      {/* <span style={{ fontSize: '14px', color: 'black' }}>Chat Now!</span> */}
    </button>
  );
};

export default ChatButton;
