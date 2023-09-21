import React, { useState } from 'react';
import {SaveStorage} from '../helpers/SaveStorage'

export const Create = ({setlistadoState}) => {
  const titleComponent = "Añadir pelicula"
  const [movieState, setMovieState] = useState({});
  const {title, description} = movieState

  let getDataFromForm = (e) => {
    e.preventDefault();

    // get data from from
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // crear objeto de pelicula
    const movie = {
      id: new Date().getTime(),
      title,
      description
    };

    // guardar estado
    setMovieState(movie)

    // update state
    setlistadoState(element => {
      return [...element, movie]
    })
    

    // guardar en locastorage
    SaveStorage("movie", movie)
    
  }
  
  return (
    <>
        <div className="add">
                <h3 className="title">{titleComponent}</h3>
                <strong>{(title && description) && "Has creado la pelicula: " +title}</strong>
                <form onSubmit={getDataFromForm}>
                    <input type="text" 
                            name='title'
                            id="title" 
                            placeholder="Titulo" />
                    <textarea id="description" 
                              name="description"
                              placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
    </>
  )
}
