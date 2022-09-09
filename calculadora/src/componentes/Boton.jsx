import React from "react";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
		//si el valor no es un numero, ni un punto ni un igual retorna true, sino false
  };

  return (
		//Usamos un template literal (``) e insertamos js (${}) y definimos 
		//dentro una funcion esOperador, la cual va a tomar el valor de
		//props.children y dependiendo de ese valor vamos a asigarle la clase
		// operador o ninguno (null)
    <div
      className={`boton-contenedor ${esOperador(props.children) ? "operador" : "null"
      }`}
    >
			
      {props.children}
    </div>
  );
}

export default Boton;
