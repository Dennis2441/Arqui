import React, { useRef, useEffect } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';
import "./App.css";
const hola="sd";
function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = { video: true };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          const video = videoRef.current;
          video.srcObject = stream;

          // Esperar a que los metadatos del video se carguen antes de reproducir
          video.onloadedmetadata = () => {
            video.play();
          };
        })
        .catch((err) => console.error("Error: " + err));
    }
  }, []);

  const Enviarfoto = () =>{
    
    console.log("Se envia foto para ver si fuciona fuck");
  }

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);

    // Convertir la imagen del canvas a formato de imagen (por ejemplo, PNG)
    const imageDataURL = canvasRef.current.toDataURL("image/png");

    // Crear un elemento <a> para descargar la imagen
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;
    downloadLink.download = "captura.png"; // Nombre por defecto para la imagen

    // Simular un click para iniciar la descarga
    downloadLink.click();
  };
  const url = 'https://i.pinimg.com/564x/f6/12/28/f6122863599199c52911e92700cda8b0.jpg';
  const message = 'Mensaje opcional';
  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay />
      <button onClick={capturePhoto}>Capturar Foto</button>
      
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ display: "none" }}
      />
     <WhatsappShareButton url={url} title={message}>
      Compartir en WhatsApp
    </WhatsappShareButton>
    </div>


  );
}

export default App;
