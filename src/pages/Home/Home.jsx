import React, { Component } from 'react';

import {Filters} from '../../components'
import {Main} from '../'

class Home extends Component {
    render() {
        return (
            <div className="CenterAlignDiv">
                <p style={{textAlign:"center"}}>All Movies
                <label 
                style={{
                    backgroundColor:"#1ca325", 
                    borderRadius:"10px", 
                    marginLeft:"5px"
                    }}>
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