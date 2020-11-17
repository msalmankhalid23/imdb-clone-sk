import React from 'react';

const TextField = (props) => {
  const { title, name, placeholder, handleChange, value } = props
  return (
    <>
      <label> {title} </label>
      <input 
      type="text" 
      name = {name}
      value= {value}
      placeholder={placeholder} 
      onChange={handleChange} />
    </>
  )
}
export default TextField;