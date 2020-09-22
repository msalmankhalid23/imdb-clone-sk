import React, { Component } from 'react';

class DropDown extends Component {
    render() {
        return (
            <>
                <label> {this.props.title} </label>
                <select name={this.props.name} id={this.props.title} onChange={this.props.handleChange}>
                    {
                        this.props.values.map(v => {
                            return <option key={v} value={v}>{v}</option>
                        })
                    }
                </select>

            </>
        )
    }
}

export default DropDown;