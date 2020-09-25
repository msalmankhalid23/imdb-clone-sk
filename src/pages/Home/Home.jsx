import React, { Component } from 'react';

import {Filters} from '../../components'
import {Main} from '../'
import style from './home.module.css'

class Home extends Component {
    render() {
        return (
            <div className={style.centerAlign}>
                <p className={style.labelAllMovies} >All Movies
                <label 
                className={style.labelMoviesCount}
                >
                     20 
                    </label>
                </p>
                <Filters />
                <Main />
            </div>
        )
    }
}

export default Home;