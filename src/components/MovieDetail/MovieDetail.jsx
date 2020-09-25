import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import style from './movieDetail.module.css'

class MovieDetail extends Component {
    state = {
        movieDetail: {}
    }

    componentDidMount() {
        //get movies id dynamically
        const moviesId = this.props.match.params.id
        let url = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US`
        axios.get(url)
            .then(res => {
                this.customDataParsing(res.data)
            }
            )
            .catch()

    }

    customDataParsing(data) {

        let detail = {
            id: data.id,
            popularity: data.popularity,
            language: this.populateLanguageFullName(data.original_language),
            title: data.title,
            overview: data.overview,
            releaseDate: data.release_date,
            rating: data.vote_average,
            genres: data.genres,
            imagePath: data.poster_path
        }

        this.setState({ movieDetail: detail })
    }
    populateLanguageFullName(language)
    {
        if(language === "en")
        {
          return "English"
        }
        else if (language === "ko")
        {
          return "Korean"
        }
        else if (language === "es")
        {
          return "Spanish"
        }
         return language
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.centerAlign}>
                    <div className={style.imageArea}>
                        <img
                            src={`http://image.tmdb.org/t/p/w185/${this.state.movieDetail.imagePath}`}
                            alt="Film Icon"
                            width="200"
                        />
                    </div>
                    <div className={style.textArea}>
                        <p className={style.title}> {this.state.movieDetail.title}
                            <Link to="/" className={style.linkStyling}> <FontAwesomeIcon icon={faHome} /> </Link>
                        </p>
                        <p className={style.spacing}>Overview</p>
                        <p className={style.spacing}>{this.state.movieDetail.overview}</p>
                        <div className={style.spacing}>
                            <span className={style.spacing}>Runtime Min</span> <span className={style.highlightWhite}>122</span>
                            <span className={style.spacing}>Release date</span> <span className={style.highlightWhite}>2019-10-02</span>
                        </div>
                        <div className={style.spacing}>
                            <span className={style.highlightDarkGray}>Genries</span> <span className={style.highlightWhite}>Crimer Thriller drama</span>
                        </div>
                        <div className={style.spacing}>
                            <span className={style.highlightDarkGray}>Spoken Language </span>  <span className={style.highlightWhite}>{this.state.movieDetail.language}</span>
                        </div>
                        <div className={style.spacing}>
                            <span className={style.highlightDarkGray}>Production Categories</span> <span className={style.highlightWhite}>DC Entertainment</span>
                        </div>
                    </div>
                    <br />
                    <Link  to={`/reviews/${this.state.movieDetail.id}`}>  
                    <button className={style.showReviewsButton}>Show reviews (Extracts)</button> 
                    </Link>
                </div>
            </div>
        )
    }
}

export default MovieDetail;