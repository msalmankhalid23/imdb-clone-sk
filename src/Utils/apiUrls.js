export const baseUrl = 'https://api.themoviedb.org/3'

export const getPopularMovies = (filters,pageNumber) =>{
    debugger
    let shortCodeLanguage = "en-US"
    if(filters)
    {
        const {language} = filters 
        shortCodeLanguage = language === "Spanish" ? "es":"en-US"
    }
    return `${baseUrl}/movie/popular?api_key=ce478a7a8196b454dea3f69abb098638&language=${shortCodeLanguage}&page=${pageNumber}`
} 

// first argument is array
//2nd argument is the variable that is passed during function calling
export const getPopularMoviesTagFunction = (arr,language) =>{
    return `${baseUrl}/movie/popular?api_key=ce478a7a8196b454dea3f69abb098638&language=${language}&page=1`
}

