import React, { Component } from 'react';
import DropDown from './DropDown'
import TextField from './TextField'
import { Filters_Data, Filters_Display_Fields } from '../Constants/Cosntant'
class Filters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genre: "Comedy",
            release: "All",
            ratings: "All",
            sortBy: "All",
            language: "All"
        }
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(event) {
        const { name, value } = event.target
        console.log(event.target.name, "Event")
        this.setState({ [name]: value })

    }

    render() {
        return (
            <div style={{ backgroundColor: "yellow", height: "70px", padding: "0 0 2px 10px" }}>
                <TextField title="List Filtering:" placeholder="Title Search" />
                {
                    Filters_Data.map((key, index) => {
                        let label = Object.keys(key)
                        let fitlerValues = Object.values(label).flat()

                        return (
                            <span key={label}>
                                { index === 1 ? <p></p> : ""}
                                <DropDown
                                    key={label}
                                    name={label}
                                    title={Filters_Display_Fields[label]}
                                    values={fitlerValues}
                                    handleChange={this.handleChange} />
                            </span>
                        )
                    })
                }
                {
                //console.log("Genre", this.state.genre, "Release", this.state.release)
                }
            </div>
        )
    }
}

export default Filters;