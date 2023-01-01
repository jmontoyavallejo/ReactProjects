import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton/Boton'
import Contador from './componentes/Contador/Contador'
import { useState } from 'react';

function App() {

  const [numClics,setNumClics]=useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          alt="logo de freecodecamp-logo-contenedor"
          className='freecodecamp-logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}/>
      <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
