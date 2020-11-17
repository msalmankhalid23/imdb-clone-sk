import React from 'react';

const DropDown = (props) => {
    const {title, name , values, handleChange, selectedValue} = props
    return (
        <>
            <label> {title} </label>
            <select name={name} id={title} onChange={handleChange} value={selectedValue} >
                {
                    values.map(v => {
                        return <option key={v} value={v}  >{v}</option>
                    })
                }
            </select>

        </>
    )
}

export default DropDown;