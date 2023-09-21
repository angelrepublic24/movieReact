import React, { useEffect, useState } from 'react';
import { Edit } from './Edit';

export const Listado = ({listado, setlistadoState}) => {
  // const [listado, setlistado] = useState([])
  const [edit, setEdit] = useState(0)
  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movie'));

    setlistadoState(movies)
    return movies;
  }

  const deleteMovie = (id) => {

    
    // get movie saved
    let movie_saved = getMovies()

    // filtrar esas peliculas para que elimine la que no quiero
    let newMovies= movie_saved.filter(movie => movie.id !== parseInt(id));
    console.log(movie_saved, newMovies)
    // update en listado
    setlistadoState(newMovies);
    // update localStoragenewMovies
    localStorage.setItem('movie', JSON.stringify(newMovies))
  }
  
  return (
    <>
    {listado != null ? 
      listado.map(movie => {
        return(
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit" onClick={() => { setEdit(movie.id)}}>Editar</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>

            {edit === movie.id &&  (<Edit movie={movie} 
                                          getMovies={getMovies} 
                                          setEdit={setEdit}
                                          setlistadoState={setlistadoState}
                                          />)}
        </article>
        )
      })
    : <h2>No hay peliculas para mostrar</h2>
  }
    </>
  )
}
