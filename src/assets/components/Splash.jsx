import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut1 = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  40% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`;

const fadeInOut2 = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  60% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
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
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 1.5s ease-out;
  pointer-events: ${props => (props.visible ? 'all' : 'none')};
`;

const SplashImage = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: contain;
  opacity: 0;
`;

const Image1 = styled(SplashImage)`
  animation: ${fadeInOut1} 4.5s linear forwards;
`;

const Image2 = styled(SplashImage)`
  animation: ${fadeInOut2} 4.5s linear forwards;
`;

const Splash = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setVisible(false); // Start fade out
      if (onFinish) {
        onFinish(); // Start content fade in
      }
    }, 4500); // Duration of logo animations

    const unmountTimer = setTimeout(() => {
      setMounted(false); // Remove from DOM after fade out
    }, 6000); // 4500ms + 1500ms transition

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <SplashContainer visible={visible}>
      <Image1 src='./logo1.png' alt="Logo 1" />
      <Image2 src='./splash.png' alt="Logo 2" />
    </SplashContainer>
  );
};

export default Splash;
