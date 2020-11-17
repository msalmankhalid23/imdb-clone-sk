import React, { useContext } from 'react';
import {DropDown, TextField} from '../../shared'
import styles from './filters.module.css'
import {FiltersContext, Filters_Data, Filters_Display_Fields} from '../../context/FiltersState'

const Filters = (props) => {

    const {filters, filterSelected} = useContext(FiltersContext)

    const handleChange = (event) => {
        const { name, value } = event.target
        filterSelected(name,value)
    }
    
        return (
            <div className={styles.container}>
                <TextField 
                title="Movie Title:" 
                placeholder="Title Search" 
                name="titleSearch"
                handleChange={handleChange}
                />
                {
                    
                    Filters_Data.map((key, index) => {
                        let label = Object.keys(key)
                        let fitlerValues
                        if(label && label[0] === 'genres')
                        {
                            fitlerValues = props.genres? props.genres.map( m => m.name): Object.values(key).flat()
                            fitlerValues.unshift('All')
                        }
                        else
                        {
                            fitlerValues = Object.values(key).flat()
                        }

                        return (
                            <span key={label}>
                                { index === 1 ? <p></p> : ""}
                                <DropDown
                                    key={label}
                                    name={label}
                                    title={Filters_Display_Fields[label]}
                                    values={fitlerValues}
                                    selectedValue = {filters[label]}
                                    handleChange={handleChange} />
                            </span>
                        )
                    })
                }
                {
               // console.log("Genre", filters.genre, "Release", filters.release)
                }
            </div>
        )
 
}

export default Filters;