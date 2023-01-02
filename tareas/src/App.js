import "./App.css";
import FreeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Tarea from './componentes/Tarea/Tarea'
import TareaFormulario from './componentes/TareaFormulario/TareaFormulario'
import ListaDeTareas from './componentes/ListaDeTareas/ListaDeTareas'




function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={FreeCodeCampLogo}
          alt="logo de freecodecamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
