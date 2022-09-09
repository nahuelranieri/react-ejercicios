import React from 'react';
import estilos from '../hojas-de-estilo/Testimonio.css';
import coyos from './data-coyos.json'

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      {
      coyos.map((coyo,i) => (
        <div key={i}>
          <img
            className='imagen-testimonio'
            src={require(`../imagenes/${coyo.imagen}.png`)}
            alt='Foto Coyo Laburante'
          />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{coyo.nombre}</strong> en {coyo.localidad}
            </p>
            <p className='cargo-testimonio'>
              {coyo.cargo} de <strong>{coyo.empresa}</strong>
            </p>
            <p className='texto-testimonio'>
              "{coyo.testimonio}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonio;