import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./assets/components/Card";
import Btn from "./assets/components/Button";
import Titulo from "./assets/components/Title";
import Container from "./assets/components/Container";
import LogosInferiores from "./assets/components/LogosInferiores";
import Splash from "./assets/components/Splash";
import datos from "./data/datos.json";
import "./App.css";



import styled, { keyframes } from "styled-components";
import { useState } from "react";

const contentFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentWrapper = styled.div`
  opacity: 0;
  animation: ${props => (props.animate ? contentFadeIn : "none")} 1.5s ease-out forwards;
`;

function AppContent() {
  const params = useParams();
  const id = parseInt(params.id);
  const notaria = datos.find(item => item.id === id);
  const [splashFinished, setSplashFinished] = useState(false);

  if (!notaria) {
    return (
      <Container>
        <Titulo>Notaría no encontrada</Titulo>
      </Container>
    );
  }

  return (
    <div style={{ minHeight: "100vh", cursor: "pointer" }}>
      <Splash onFinish={() => setSplashFinished(true)} />
      <ContentWrapper animate={splashFinished}>
        <Container>
          {notaria.foto ? (
            <img src={notaria.foto} alt={`Foto de ${notaria.nombre}`} style={{ maxWidth: '13rem', borderRadius: '8px', marginBottom: '1rem' }} />
          ) : (
            <Titulo>Notaría {notaria.id}</Titulo>
          )}
          <Card
            nombre={notaria.nombre}
            cargo={notaria.cargo}
            ubicacion={notaria.ubicación}
          />
        </Container>
        <Container>
          <Btn
            href={notaria.tarjeta}
            target="_blank"
            rel="noopener noreferrer">
            Tarjeta de contacto
          </Btn>

          <Btn
            href={notaria.maps}
            target="_blank"
            rel="noopener noreferrer">
            Ubicación
          </Btn>

          <Btn
            href={notaria.nombramiento}
            target="_blank"
            rel="noopener noreferrer">
            Nombramiento
          </Btn>
        </Container>
        <Container>
          <LogosInferiores />
        </Container>
      </ContentWrapper>
    </div>
  );
}

function App() {
  return (
    <Router basename="/notarios">
      <Routes>
        <Route path="/:id" element={<AppContent />} />
        <Route path="/" element={<div>Selecciona un ID en la URL, como /1</div>} />
      </Routes>
    </Router>
  );
}

export default App;