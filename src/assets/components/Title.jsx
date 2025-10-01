import styled from "styled-components";

const Titulo = styled.p`
  font-size: 3em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 8px 20px rgba(0,0,0,0.6), 0 2px 0 rgba(255,255,255,0.05);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const Title = ({ children }) => {
  return <Titulo>{children}</Titulo>;
};

export default Title;