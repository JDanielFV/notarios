import { useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./assets/components/Card";
import Btn from "./assets/components/Button";
import Titulo from "./assets/components/Title";
import Container from "./assets/components/Container";
import LogosInferiores from "./assets/components/LogosInferiores";
import datos from "./data/datos.json";
import Splash from "./assets/components/Splash";

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
    <Splash></Splash>
    <Container>
      <Titulo>Notaría { notaria.id }</Titulo>
      <Card nombre={notaria.nombre} cargo={notaria.cargo} ubicacion={notaria.ubicación}></Card>
      <Btn href={notaria.tarjeta} target='_blank' rel='noopener noreferrer'>Tarjeta de contacto</Btn>
      <Btn href={notaria.maps} target='_blank' rel='noopener noreferrer'>Ubicación</Btn>
      <Btn href={notaria.nombramiento} target='_blank' rel='noopener noreferrer'>Nombramiento</Btn>
      <LogosInferiores/>
    </Container>
    </>
  ) 
}


function App() {
  return (
    <Router basename="/notarios/">
      <Routes>
        <Route path="/:id" element={<AppContent />} />
        console.log(import.meta.env.VITE_BASE_URL);
        {/* Opcional: ruta por defecto para redirigir o mostrar lista */}
        <Route path="/notarios/" element={<div>Selecciona un ID en la URL, como /1</div>} />
      </Routes>
    </Router>
  );
}
export default App
