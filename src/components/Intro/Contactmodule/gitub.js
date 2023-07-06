import React from 'react';
import Githubs from "@iconscout/react-unicons/icons/uil-github"

const Github = ({  }) => {
  const handleChatClick = () => {
    const url = `https://github.com/josikamt`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Githubs color="white" size="2rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

 export default Github;