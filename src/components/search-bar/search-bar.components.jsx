import React from 'react'
import './search-bar.style.css'

 export const SearchBar = ({placeholder,handlechange}) =>(

    <input
    className ='search' 
    type='search' 
    placeholder = {placeholder}
    onChange = {handlechange}>

    </input>)

 