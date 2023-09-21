import React, { useState } from 'react'

export const Buscador = ({listado, setlistadoState}) => {

  const [searchState, setSearchState] = useState('');
  const [noFound, setNotFound] = useState(false);
  const searchMovie = (e) => {
    // crear estado y actualizar
    setSearchState(e.target.value)    
    // filtrar para buscar coincidencia
      let movieFound = listado.filter(movie => {
        return movie.title.toLowerCase().includes(searchState.toLocaleLowerCase());
      });
    // comprobar si hay resultado
      if(searchState.length <= 1 || searchMovie.length <= 0){
        movieFound = JSON.parse(localStorage.getItem('movie'))
        setNotFound(false);
      }else{
        setNotFound(true);
      }
      console.log(movieFound)
    // actualizar estado del listado principal con lo que he filtrado
    setlistadoState(movieFound)

  }
  return (
    <>
        <div className="search">
                <h3 className="title">Buscador</h3>
                {(noFound === true && searchState.length > 1) &&(
                  <span className='noFound'> the movie not found</span>
                )}
                <form>
                    <input type="text" 
                            id="search_field"
                            name='search'
                            autoComplete='off'
                            value={searchState}
                            onChange={searchMovie} />
                            
                    <button id="search">Buscar</button>
                </form>
            </div>
    </>
  )
}
