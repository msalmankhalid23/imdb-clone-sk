import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MovieDetail.css'

class MovieDetail extends Component {
    state = {
        movieDetail: {}
    }

    componentDidMount() {
        console.log("Detail Mount")
        //get movies id dynamically
        const moviesId = this.props.match.params.id
        let url = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=ce478a7a8196b454dea3f69abb098638&language=en-US`
        axios.get(url)
            .then(res => {
                console.log(res.data, "Details Response")
                this.customDataParsing(res.data)
            }
            )
            .catch()

    }

    customDataParsing(data) {

        let detail = {
            id: data.id,
            popularity: data.popularity,
            language: data.original_language,
            title: data.title,
            overview: data.overview,
            releaseDate: data.release_date,
            rating: data.vote_average,
            genres: data.genres,
            imagePath: data.poster_path
        }

        this.setState({ movieDetail: detail })
    }

    render() {
        return (
            <div className="BackgroundArea">
                <div className="CenterAlignDiv">
                    {console.log(this.state.movieDetail, "Movie Detail")}
                    <div className="ImageArea">
                        <img
                            src={`http://image.tmdb.org/t/p/w185/${this.state.movieDetail.imagePath}`}
                            alt="Film Icon"
                            width="200"
                        />
                    </div>
                    <div className="TextArea">
                        <p style={{ fontWeight: "bold", fontSize: "18px" }}> {this.state.movieDetail.title}
                            <Link to="/" style={{ textDecoration: "none" }}> <FontAwesomeIcon icon={faHome} color="blue" /> </Link>
                        </p>
                        <p className="Spacing">Overview</p>
                        <p className="Spacing">{this.state.movieDetail.overview}</p>
                        <div className="Spacing">
                            <span className="DarkGrayHighlight">Runtime Min</span> <span className="WhiteHighlight">122</span>
                            <span className="DarkGrayHighlight">Release date</span> <span className="WhiteHighlight">2019-10-02</span>
                        </div>
                        <div className="Spacing">
                            <span className="DarkGrayHighlight">Genries</span> <span className="WhiteHighlight">Crimer Thriller drama</span>
                        </div>
                        <div className="Spacing">
                            <span className="DarkGrayHighlight">Spoken Language </span>  <span className="WhiteHighlight">{this.state.movieDetail.language}</span>
                        </div>
                        <div className="Spacing">
                            <span className="DarkGrayHighlight">Production Categories</span> <span className="WhiteHighlight">DC Entertainment</span>
                        </div>
                    </div>
                    <br />
                    <Link  to={`/reviews/${this.state.movieDetail.id}`}>  
                    <button className="ShowReviewsButton">Show reviews (Extracts)</button> 
                    </Link>
                </div>
            </div>
        )
    }
}

export default MovieDetail;