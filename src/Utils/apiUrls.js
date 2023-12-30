require('dotenv').config()

export const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.REACT_APP_TMDB_APP_API_KEY;

export const sendRequestForPopularMovies = (filters, pageNumber) => {
    
    const { language } = filters
    return `${baseUrl}/movie/popular?api_key=${apiKey}&language=${languageFilterValue(language)}&page=${pageNumber}`
}

export const sendRequestForAllMovies = (filters, pageNumber, genresRefereneData) => {
    
    const apiKey1 = process.env.REACT_APP_TMDB_APP_API_KEY;
    const { language, genres, rating, releaseDate, sortBy, titleSearch } = filters
    if(titleSearch)
    {
        return `${baseUrl}/search/movie?api_key=${apiKey1}&include_adult=false&page=${pageNumber}&year=${releaseDate?releaseDate:2020}&language=${languageFilterValue(language)}&query=${titleSearch}`
    }

    return `${baseUrl}/discover/movie?api_key=${apiKey1}&include_adult=false&include_video=false&page=${pageNumber}&year=${releaseDate?releaseDate:2020}&language=${languageFilterValue(language)}&sort_by=${sortByFilterValue(sortBy)}${genreFilterValue(genres,genresRefereneData)}${ratingUrlForApi(rating)}`
    }

export const sendRequestForGenre = () => {
    return `${baseUrl}/genre/movie/list?api_key=${apiKey}`
}

const sortByFilterValue = (sortBy) => {
    let sortValue = "popularity.desc"
    switch (sortBy) {
        case "Popularity":
            sortValue = "popularity.desc"
            break;
        case "Release Date":
            sortValue = "release_date.desc"
            break;
        case "Top Rated":
            sortValue = "vote_average.desc"
            break;
        default:
            sortValue = "popularity.desc"
            break;
    }
    return sortValue
}


const languageFilterValue = (language) => {
    let languageValue = "en-US"
    switch (language) {
        case "Spanish":
            languageValue = "es"
            break;
        case "French":
            languageValue = "fr"
            break;
        case "German":
            languageValue = "de"
            break;
        default:
            languageValue = "en-US"
            break;
    }
    return languageValue
}

const ratingUrlForApi = (rating) =>{
    return rating && rating !== 'All'?`&vote_average.gte=${rating}`:''
}

const genreFilterValue = (genres, genresRefereneData) => {
    const value = genresRefereneData? genresRefereneData.find( f => f.name ===genres):undefined
    return value? `&with_genres=${value.id}`:''

}

// first argument is array
//2nd argument is the variable that is passed during function calling
export const getPopularMoviesTagFunction = (arr, language) => {
    return `${baseUrl}/movie/popular?api_key=${apiKey}&language=${language}&page=1`
}

