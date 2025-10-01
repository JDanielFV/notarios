import styled from "styled-components";

const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  text-align: center;
  max-width: 400px;
  margin: 20px;
`;

const Nombre = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.02);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Cargo = styled.p`
  font-size: 1.5em;
  margin: 0px 0 0;
  color: #fff;
  text-shadow: 0 4px 12px rgba(0,0,0,0.45);

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;


const Card = ({ nombre, cargo, ubicacion  }) => {
  return (
    <CardWrapper>
      <Nombre>{nombre}</Nombre>
      <hr />
      <Cargo>{cargo}</Cargo>
      <Cargo>{ubicacion}</Cargo>
    </CardWrapper>
  );
};

export default Card;
