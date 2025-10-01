import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Btn = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: rgba(52, 52, 52, 0.22);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  padding: 12px 22px;
  margin: 10px;
  font-size: 1em;
  cursor: pointer;
  min-width: 150px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  transition: transform 160ms ease, box-shadow 180ms ease, background 180ms ease;
  animation: ${fadeIn} 0.5s ease-out;

  &::before {
    content: '';
    position: absolute;
    left: -30%;
    top: -60%;
    width: 60%;
    height: 160%;
    background: linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
    transform: rotate(-20deg);
    transition: left 260ms ease, opacity 200ms ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    background: rgba(60,60,60,0.28);
  }

  &:hover::before {
    left: 120%;
    opacity: 1;
  }

  &:active {
    transform: translateY(0px) scale(0.99);
  }
`;

const Button = ({ href, children }) => {
  return <Btn href={href}>{children}</Btn>;
};

export default Button;
