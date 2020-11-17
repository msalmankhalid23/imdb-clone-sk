import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFilm} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import styles from './header.module.css'

  const Header = () =>{
    return (
      <div className={styles.container}>
        <div className={styles.centerAlign}>
          <Link to="/" className={styles.linkFormatting}> TMDB CLIENT </Link>
          <FontAwesomeIcon icon={faVideo} style={{marginLeft:"190px"}} />
          <span className={styles.spaceBetweenIcons}> For the Movie Enthusiast!! </span>
          <FontAwesomeIcon icon={faFilm} style={{marginLeft:"150px"}} />
          
          <span className={styles.spaceBetweenIcons}>
            <Link to="/" className={styles.linkFormatting}>Home</Link> 
            <Link to="/favorites" className={styles.linkFormatting}>Favorites</Link> 
            <Link className={styles.linkFormatting}>Upcoming Movies</Link>
            <Link className={styles.linkFormatting}> Search </Link> 
          </span>
          
        </div>
    </div>
    )
  }
  
  export default Header;