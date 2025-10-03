import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  padding: 0 20px 0px 20px;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.6s ease-out;
  gap: 70%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoImage = styled.img`
  max-width: auto; /* Adjust as needed */
  height: 4em;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
`;

const LogosInferiores = () => {
  return (
    <LogosWrapper>
      <LogoImage src='./logo1.png' alt="Logo 1" />
      <LogoImage src='./splash.png' alt="Logo 2" />
    </LogosWrapper>
  );
};

export default LogosInferiores;