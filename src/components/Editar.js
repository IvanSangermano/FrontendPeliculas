import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const tituloComponente = "Editar pelicula";
    const guardarEdicion = (e, id) => {
        e.preventDefault();

        let target = e.target;
        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex(peli => peli.id === id);

        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        pelisAlmacenadas[indice] = peliActualizada;

        localStorage.setItem('pelis', JSON.stringify(pelisAlmacenadas))
        setListadoState(pelisAlmacenadas)
        setEditar(0)
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{tituloComponente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" name='titulo' className='titulo_editado' defaultValue={peli.titulo}/>

            <textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada' />

            <input type="submit" className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}
