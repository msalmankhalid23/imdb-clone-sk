import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFilm} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import styles from './header.module.css'
class Header extends Component {
    render()
    {
      return (
        <div className={styles.container}>
          <div className={styles.centerAlign}>
            <Link to="/" className={styles.linkNoFormatting}> TMDB CLIENT </Link>
            <FontAwesomeIcon icon={faVideo} style={{marginLeft:"190px"}} />
            <span className={styles.spaceBetweenIcons}> For the Movie Enthusiast!! </span>
            <FontAwesomeIcon icon={faFilm} style={{marginLeft:"150px"}} />
            <span className={styles.spaceBetweenIcons}> 
              Home
              Favorites
              Upcoming Movies
              Search
            </span>
          </div>
      </div>
      )
    }
  }
  
  export default Header;