import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const titulo = "Añadir Pelicula"
  const [peliculaState, setPeliculaState] = useState({
    id: "",
    titulo: "",
    descripcion: ""
  });

  const conseguirDatosForm = e => {
    e.preventDefault();

    let target = e.target;

    let pelicula = {
      id: new Date().getTime(),
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    setPeliculaState(pelicula);

    setListadoState(elem => {
      return [...elem, pelicula]
    })

    GuardarEnStorage('pelis', pelicula);
  }

  

  return (
    <>
        <div className="add">
            <h3 className="title">{titulo}</h3>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" id="titulo" placeholder="Titulo" />
                <textarea id="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    </>
  )
}
