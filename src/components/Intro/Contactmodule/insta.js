import React from 'react';
import Insta from "@iconscout/react-unicons/icons/uil-instagram"

const insta = ({  }) => {
  const handleChatClick = () => {
    const url = `https://www.instagram.com/josikamt`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Insta color="white" size="2rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default insta;