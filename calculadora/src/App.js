import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton/Boton'
import BotonClear from './componentes/BotonClear/BotonClear'
import Pantalla from './componentes/Pantalla/Pantalla'


function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
<img 
className='freecodecamp-logo'
src={freeCodeCampLogo}
alt="logo de freecodecamp" />
      </div>
    </div>
  );
}

export default App;
