import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Movie extends Component {
  render() {
    return (

      <div style={{ 
        backgroundColor: "#ebebeb", 
        float: "left", 
        margin: "0 10px 10px 10px", 
        width:"210px", 
        height:"360px", 
        paddingLeft:"26px"}}>
        
        <Link
          to={`/details/${this.props.movie.id}`}
        >
          <img
            src={`http://image.tmdb.org/t/p/w185/${this.props.movie.imagePath}`}
            alt="Film Icon"
            width="190"
          />
        </Link>
        <div style={{ textAlign: "center", width:"200px" }}>
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