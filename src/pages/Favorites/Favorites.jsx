import React from 'react'
import Movie from '../../components/Movie/'
import style from './favorites.module.css'

const Favorites = (props) => {
  const { favoriteMovies, removeFromFavorites } = props //removeFromFavorite

  const handleRemoveFromFavoriteClick = (event, props) => {
    const { movie } = props
    removeFromFavorites(movie.id)
  }

  return (
    <div className={style.container}>
      {
        favoriteMovies && favoriteMovies.length> 0?
      favoriteMovies.map(m => {
        return <Movie
          key={m.id}
          movie={m}
          isFavoritePage={true}
          handleClick={handleRemoveFromFavoriteClick}
        />
      }) : <div className={style.noFavoritesLabel}> No favorites in list Yet!! </div>
      }

    </div>
  )
}

export default Favorites;