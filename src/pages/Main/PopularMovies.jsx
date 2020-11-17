import React, { useEffect, useContext } from 'react';
import { Movie } from '../../components'
import style from './main.module.css'
import { FiltersContext } from '../../context/FiltersState'

const PopularMovies = (props) => {

    const { getPopularMovies, movies,
        loadNextPageMovies, loadPreviousPageMovies,
        pageNumbers, appSection, totalPages, totalMovies } = props

    const pageNumber = pageNumbers.popularMovie
    let { filters } = useContext(FiltersContext)

    useEffect(() => {
        getPopularMovies(filters)
    }, [filters,getPopularMovies])

    return (
        <div className={style.container}>
            <p>
                <label className={style.sectionHeading}>
                    Popular Movies:
                </label>
                <label
                    className={style.labelMoviesCount}
                >
                    {movies.length * pageNumber}/{totalMovies}
                </label>
            </p>
            {movies.map(m => {
                return <Movie key={m.id} movie={m} />
            })}
            <div className={style.nextPrevButtonDiv}>
                <button disabled={pageNumber <= 1 ? true : false} onClick={() => loadPreviousPageMovies(filters, appSection)}> Previous Page</button>
                <span>{pageNumber}/{totalPages}</span>
                <button onClick={() => loadNextPageMovies(filters, appSection)} > Next Page</button>
            </div>
        </div>
    )
}

export default PopularMovies;