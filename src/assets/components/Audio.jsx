import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const playAudio = () => {
      // Solo intenta reproducir si el audio existe y no está ya sonando.
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(error => {
          console.log("Audio play failed, likely due to user interaction requirement:", error);
        });
      }
    };

    const handleFirstInteraction = () => {
      if (!hasInteracted.current) {
        playAudio();
        hasInteracted.current = true;
        // Una vez que el audio ha comenzado, ya no necesitamos este listener.
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    // Agregamos listeners para la primera interacción del usuario.
    // 'touchstart' es importante para dispositivos móviles.
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [src]);

  return (
    <audio ref={audioRef} src={src} loop preload="auto" style={{ display: 'none' }} />
  );
};

export default AudioPlayer;
