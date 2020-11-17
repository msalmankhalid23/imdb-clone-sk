import React, { useRef, useState, useCallback } from 'react';
import { Filters } from '../../components'
import { Main, PopularMovies } from '../'
import style from './home.module.css'
import { useEffect } from 'react';
import * as constants from '../../Constants/Cosntant'


const Home = (props) => {
    const { fetchGenreData } = props
    const divRef = useRef()
    const [allMoviesToggle, setAllMoviesToggle] = useState(false)
    const [popularMoviesToggle, setPopularMoviesToggle] = useState(false)

    useEffect(() => {
        fetchGenreData()
    }, [fetchGenreData])

    const handleClick = useCallback((event) => {
        event.target.id === '1' ? setAllMoviesToggle(!allMoviesToggle) : setPopularMoviesToggle(!popularMoviesToggle)
    }, [allMoviesToggle, popularMoviesToggle])

    return (
        <div className={style.centerAlign}>
            <Filters genres={props.genres} />
            <div>

                <button id={1} className={allMoviesToggle ? style.collapseButton : style.expandButton} onClick={(event) => handleClick(event)} > All Movies</button>
                <div ref={divRef} className={allMoviesToggle ? style.contentCollapse : style.contentExpand} >
                    <Main appSection={constants.APP_SECTION_ALL_MOVIES} />
                </div>
            </div>
            <br />
            <br />
            <div>
                <button id={2} className={popularMoviesToggle ? style.collapseButton : style.expandButton} onClick={(event) => handleClick(event)} > Popular Movies</button>
                <div ref={divRef} className={popularMoviesToggle ? style.contentCollapse : style.contentExpand} >
                    <PopularMovies />
                </div>
            </div>
        </div>
    )
}
export default Home;