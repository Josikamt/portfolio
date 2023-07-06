import React from 'react';
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"

const linkedin = ({  }) => {
  const handleChatClick = () => {
    const url = `https://www.linkedin.com/in/josikamt`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Linkedin color="white" size="2rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default linkedin;