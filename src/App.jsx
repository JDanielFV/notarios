import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./assets/components/Card";
import Btn from "./assets/components/Button";
import Titulo from "./assets/components/Title";
import Container from "./assets/components/Container";
import LogosInferiores from "./assets/components/LogosInferiores";
import Splash from "./assets/components/Splash";
import datos from "./data/datos.json";

function AppContent() {
  const params = useParams();
  const id = parseInt(params.id);
  const notaria = datos.find(item => item.id === id);

  if (!notaria) {
    return (
      <Container>
        <Titulo>Notaría no encontrada</Titulo>
      </Container>
    );
  }

  return (
    <>
      <Splash />
      <Container>
        <Titulo>Notaría {notaria.id}</Titulo>
        <Card
          nombre={notaria.nombre}
          cargo={notaria.cargo}
          ubicacion={notaria.ubicación}
        />
        <Btn
          href={notaria.tarjeta}
          target='_blank'
          rel='noopener noreferrer'>
          Tarjeta de contacto
        </Btn>

        <Btn
          href={notaria.maps}
          target='_blank'
          rel='noopener noreferrer'>
          Ubicación
        </Btn>

        <Btn
          href={notaria.nombramiento}
          target='_blank'
          rel='noopener noreferrer'>
          Nombramiento
        </Btn>
        
        <LogosInferiores />
      </Container>
    </>
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