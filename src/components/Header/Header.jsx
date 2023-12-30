import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFilm} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import styles from './header.module.css'

  const Header = () =>{
    return (
      <div className={styles.container}>
        <div className={styles.centerAlign}>
          <Link to="/" className={styles.logo}> M Salman Khalid </Link>
          <FontAwesomeIcon icon={faVideo} style={{marginLeft:"190px"}} />
          <span className={styles.spaceBetweenIcons}> For the Movie Enthusiast!! </span>
          <FontAwesomeIcon icon={faFilm} style={{marginLeft:"150px"}} />
          
          <span className={styles.menuList}>
            <ul>
            <li>
            <Link to="/" className={styles.linkFormatting}>Home</Link> 
            </li>
            <li>
            <Link to="/favorites" className={styles.linkFormatting}>Favorites</Link> 
            </li>
            <li>
            <Link className={styles.linkFormatting}>Upcoming Movies</Link>
            </li>
            <li>
            <Link className={styles.linkFormatting}> Search </Link> 
            </li>
            </ul>
          </span>
          
        </div>
    </div>
    )
  }
  
  export default Header;
