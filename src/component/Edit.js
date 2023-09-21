import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setlistadoState}) => {
    const titleComponent = "Edit Movie";

    const saveEdit = (e, id) => {
        e.preventDefault();
        // consegir target del evet
        let data = e.target;

        // buscar indice del objeto
        const movieSaved = getMovies();
        const index = movieSaved.findIndex(movie => movie.id === id);

        // crear objeto con ese indice
        let movieUpdate = {
            id,
            title: data.title.value,
            description: data.description.value,
        }
        // actualizar elemento con ese index
        movieSaved[index] = movieUpdate;

        // guardar nuevo array en localstorage
        localStorage.setItem('movie', JSON.stringify(movieSaved))

        // actualizar estado
        setlistadoState(movieSaved);
        setEdit(0)
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titleComponent}</h3>

        <form onSubmit={(e => saveEdit(e, movie.id))}>
            <input  type='text'
                    name="title"
                    className='title_edit'
                    defaultValue={movie.title}
            />
            <textarea
                name="description"
                defaultValue={movie.description}
                className='description_edit'
            />
            <input type="submit" className='edit' value="Update"/>
        </form>
    </div>
  )
}
