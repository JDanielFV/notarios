import styled from "styled-components";
import { useRef } from "react";
const audioFile = "/notarios/audio.mp3";


const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100dvw;
  padding: 5px;
  margin: 15px 0 15px 0;
`;

const Container = ({ children }) => {

    const audioRef = useRef(new Audio(audioFile));
  
    const playSound = () => {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    };
  

  return <ContainerWrapper onClick={playSound}>{children}</ContainerWrapper>;
};

export default Container;
