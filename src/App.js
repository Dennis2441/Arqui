import React, { useState } from "react";
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import "./App.css";

function App() {
  const [estadoBluetooth, setEstadoBluetooth] = useState("Desconectado");

  const conectarBluetooth = async () => {
    try {
      const response = await fetch('http://tu-servidor-flask/conectar_bluetooth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEstadoBluetooth("Conectado");
        console.log(data.message);
      } else {
        setEstadoBluetooth("Error");
        console.error(data.error);
      }
    } catch (error) {
      setEstadoBluetooth("Error");
      console.error('Error al llamar a la API:', error);
    }
  };

  const desconectarBluetooth = async () => {
    try {
      const response = await fetch('http://tu-servidor-flask/desconectar_bluetooth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEstadoBluetooth("Desconectado");
        console.log(data.message);
      } else {
        setEstadoBluetooth("Error");
        console.error(data.error);
      }
    } catch (error) {
      setEstadoBluetooth("Error");
      console.error('Error al llamar a la API:', error);
    }
  };

  return (
    <div>
      <h1>Estado Bluetooth: {estadoBluetooth}</h1>
      <button onClick={conectarBluetooth}>Conectar Bluetooth</button>
      <button onClick={desconectarBluetooth}>Desconectar Bluetooth</button>
      {/* Agrega más elementos y funciones según sea necesario */}
    </div>
  );
}

export default App;
