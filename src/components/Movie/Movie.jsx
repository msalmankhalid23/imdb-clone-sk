import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './movie.module.css'

const Movie = (props) => {
  const { isFavoritePage, handleClick, isFavorite } = props
  const opacity = isFavorite?0.5:1
  return (

    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link
          to={`/details/${props.movie.id}`}
        >
          <img
            src={`http://image.tmdb.org/t/p/w185/${props.movie.imagePath}`}
            alt="Film Icon"
            width="190"
          />
        </Link>
        <div className={styles.multilineTitle}>
          {props.movie.title}
        </div>
      </div>
      <div className={styles.iconsDiv}>
        <FontAwesomeIcon icon={faFilm} />
        {props.movie.releaseDate}
        <br />
        <FontAwesomeIcon icon={faStar} />
        {props.movie.rating}
      </div>
      {
       handleClick? (
              <div className={styles.addToFavoriteDiv} >
              <button
                className={styles.addToFavoriteButton}
                onClick={(event) => handleClick(event,props)}
                disabled = {isFavorite}
                style={{opacity:opacity}}
                >
                {!isFavoritePage ? "Add to Favorites" : "Remove from Favorites"}
              </button>
              </div>
        ) : ""
      }
    </div>
  )
}

export default Movie;