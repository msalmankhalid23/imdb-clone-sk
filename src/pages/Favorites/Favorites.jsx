import React from 'react'
import Movie from '../../components/Movie/'
import style from './favorites.module.css'

const Favorites = (props) =>
{
    const {favoriteMovies, removeFromFavorites} = props //removeFromFavorite
    
     const handleRemoveFromFavoriteClick = (event,props) =>{
        const {movie} = props
        removeFromFavorites(movie.id)
      } 

    return(
        <div className={style.container}>
      {favoriteMovies.map(m => {
        return <Movie 
        key={m.id} 
        movie={m} 
        isFavoritePage={true} 
        handleClick = {handleRemoveFromFavoriteClick} 
        />
      })}

    </div>
    )
}

export default Favorites;