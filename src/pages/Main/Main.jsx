import React, { useEffect, useContext } from 'react';
import { Movie } from '../../components'
import style from './main.module.css'
import { FiltersContext } from '../../context/FiltersState'

const Main = (props) => {
  const { getAllMovies, movies, addToFavorites,
    loadNextPageMovies, loadPreviousPageMovies,
    pageNumbers, appSection, totalPages,totalMovies } = props

  const pageNumber = pageNumbers.allMovie
  let { filters } = useContext(FiltersContext)

  useEffect(() => {
    getAllMovies(filters)
  }, [filters,getAllMovies])

  const handleAddToFavoriteClick = (event, props) => {
    const { movie } = props
    //set isFavorite to true
    movie.isFavorite = true
    addToFavorites(movie)
  }

  return (
    <div className={style.container}>

      <p>
                <label className={style.sectionHeading}>
                    All Movies:
                </label>
                <label
                    className={style.labelMoviesCount}
                >
                    {movies.length*pageNumber}/{totalMovies}
                </label>
            </p>

      {movies.map(m => {
        return <Movie key={m.id} movie={m} handleClick={handleAddToFavoriteClick} isFavorite={m.isFavorite} />
      })}
      <div className={style.nextPrevButtonDiv}>
        <button disabled={pageNumber <= 1 ? true : false} onClick={() => loadPreviousPageMovies(filters, appSection)}> Previous Page</button>
        <span>{pageNumber}/{totalPages}</span>
        <button disabled={pageNumber > totalPages ? true : false} onClick={() => loadNextPageMovies(filters, appSection)} > Next Page</button>
      </div>
    </div>
  )
}

export default Main;