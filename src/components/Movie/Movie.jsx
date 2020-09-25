import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './movie.module.css'

class Movie extends Component {
  render() {
    return (

      <div className={styles.container}>
        
        <Link
          to={`/details/${this.props.movie.id}`}
        >
          <img
            src={`http://image.tmdb.org/t/p/w185/${this.props.movie.imagePath}`}
            alt="Film Icon"
            width="190"
          />
        </Link>
        <div className={styles.title}>
          {this.props.movie.title}
          </div>
        <div>
          <FontAwesomeIcon icon={faFilm} />
          {this.props.movie.releaseDate}
          </div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          {this.props.movie.rating}
          </div>

      </div>

    )
  }
}

export default Movie;