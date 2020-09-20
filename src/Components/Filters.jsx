import React, { Component } from 'react';

class Filters extends Component {

    constructor(props)
    {
        super(props)
        this.state ={genre:"comedy", release:"all"}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.id,"Event")
        this.setState({genre: event.target.value});
    }

    render() {
        return (
            <div style={{ backgroundColor: "yellow", height: "70px", padding:"0 0 2px 10px" }}>
                <p>
                    <label> List Filtering: </label>
                    <input type="text" placeholder="Title Search" />

                    <label> Genre: </label>
                    <select id="genre" value={this.state.genre} onChange={this.handleChange}>
                        <option value="comedy">Comedy</option>
                        <option value="horror">horror</option>
                        <option value="romance">Romance</option>
                        <option value="fiction">Fiction</option>
                    </select>
                    You have selected:{this.state.genre}
                </p>

                <p>
                    <label> Release Date: </label>
                    <select id="release" value={this.state.genre} onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="year">Year</option>
                    </select>

                    <label> Ratings: </label>
                    <select id="ratings" value={this.state.genre} onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="name">Name</option>
                    </select>

                    <label> Sort By: </label>
                    <select id="release" value={this.state.genre} onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="year">Year</option>
                    </select>

                    <label> Language: </label>
                    <select id="release" value={this.state.genre} onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="english">English</option>
                    </select>
                </p>


        

            </div>
        )
    }
}

export default Filters;