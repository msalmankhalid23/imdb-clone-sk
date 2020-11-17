import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import style from './movieDetail.module.css'

const MovieDetail = (props) => {
    const [movieDetail, setMovideDetail] = useState({})

    //get movies id from dynamic routing
    const movieId = props.match.params.id

    const customDataParsing = useCallback((data) => {

        let detail = {
            id: data.id,
            popularity: data.popularity,
            language: populateLanguageFullName(data.original_language),
            title: data.title,
            overview: data.overview,
            releaseDate: data.release_date,
            rating: data.vote_average,
            genres: data.genres,
            imagePath: data.poster_path
        }

        setMovideDetail(detail)
    }, [])

    useEffect(() => {
        
        let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US`
        axios.get(url)
            .then(res => {
                customDataParsing(res.data)
            }
            )
            .catch()

    }, [customDataParsing,movieId])


    const populateLanguageFullName = (language) => {
        if (language === "en") {
            return "English"
        }
        else if (language === "ko") {
            return "Korean"
        }
        else if (language === "es") {
            return "Spanish"
        }
        return language
    }


    return (
        <div className={style.container}>
            <div className={style.centerAlign}>
                <div className={style.imageArea}>
                    <img
                        src={`http://image.tmdb.org/t/p/w185/${movieDetail.imagePath}`}
                        alt="Film Icon"
                        width="200"
                    />
                </div>
                <div className={style.textArea}>
                    <p className={style.title}> {movieDetail.title}
                        <Link to="/" className={style.linkStyling}> <FontAwesomeIcon icon={faHome} /> </Link>
                    </p>
                    <p className={style.spacing}>Overview</p>
                    <p className={style.spacing}>{movieDetail.overview}</p>
                    <div className={style.spacing}>
                        <span className={style.spacing}>Runtime Min</span> <span className={style.highlightWhite}>122</span>
                        <span className={style.spacing}>Release date</span> <span className={style.highlightWhite}>2019-10-02</span>
                    </div>
                    <div className={style.spacing}>
                        <span className={style.highlightDarkGray}>Genries</span> <span className={style.highlightWhite}>Crimer Thriller drama</span>
                    </div>
                    <div className={style.spacing}>
                        <span className={style.highlightDarkGray}>Spoken Language </span>  <span className={style.highlightWhite}>{movieDetail.language}</span>
                    </div>
                    <div className={style.spacing}>
                        <span className={style.highlightDarkGray}>Production Categories</span> <span className={style.highlightWhite}>DC Entertainment</span>
                    </div>
                </div>
                <br />
                <Link to={`/reviews/${movieDetail.id}`}>
                    <button className={style.showReviewsButton}>Show reviews (Extracts)</button>
                </Link>
            </div>
        </div>
    )
}


export default MovieDetail;