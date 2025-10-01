import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeOut} 0.5s ease-out forwards;
  animation-delay: 2.5s; /* Start fade out after 2.5s (0.5s logo delay + 2s logo display) */
`;

const SplashLogo = styled.img`
  width: 200px; /* Adjust size as needed */
  height: auto;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s; /* Start fade in after 0.5s */
`;

const Splash = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) {
        onFinish();
      }
    }, 3000); // Total duration: 0.5s (delay) + 2s (logo display) + 0.5s (fade out) = 3s

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) {
    return null;
  }

  return (
    <SplashContainer>
      <SplashLogo src='./splash.png' alt="Logo" />
    </SplashContainer>
  );
};

export default Splash;
