import * as constants from '../../Constants/Cosntant'


export const fetchGenreData = () =>(
    {
        type: constants.GET_ALL_GENRE,
        payload:[]
    }
)
export const saveGenreToStore = (genre) =>(
    {
        type: constants.SAVE_GENRE_TO_STORE,
        payload:genre
    }
)