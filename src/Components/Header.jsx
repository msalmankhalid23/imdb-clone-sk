import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faFilm} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

class Header extends Component {
    render()
    {
      return (
        <div style={{backgroundColor:"#5e5e5e", height:"40px", color:"white" , paddingTop:"10px"}}>
          <div style={{width:"95%", margin:"0 auto"}}>
            <Link to="/" style={{ textDecoration: "none", color:"white" }}> TMDB CLIENT </Link>
            <FontAwesomeIcon icon={faVideo} style={{marginLeft:"190px"}} />
            <span style={{marginLeft:"150px"}}> For the Movie Enthusiast!! </span>
            <FontAwesomeIcon icon={faFilm} style={{marginLeft:"150px"}} />
            <span style={{marginLeft:"150px"}}> 
              <a> Home  </a> 
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