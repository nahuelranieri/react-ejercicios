import "./App.css";
import Boton from "./componentes/Boton";
import contadorLogo from "./imagenes/contador-logo.png";
import Contador from "./componentes/Contador";
import {useState} from "react";


function App() {

    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
      setNumClics(numClics + 1);
      console.log('Clic');
    }

    const reiniciarContador = () => {
      setNumClics(0)
      console.log('Reiniciar');
    }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" 
        src={contadorLogo} 
        alt="Logo Contador" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true} //pasamos valores entre llaves porque HTML/jsx NO TIENE valores booleanos
        manejarClic={manejarClic}/>
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
