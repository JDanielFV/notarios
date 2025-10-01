import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Titulo = styled.p`
  font-size: 3em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 8px 20px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.05);
  margin-bottom: 20px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const Title = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default Title;