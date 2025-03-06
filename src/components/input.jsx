import React from "react";
import { useWheather } from "../context/weather";

import "../App.css"

const Input = () =>{

    const weather = useWheather();
    return (
       <>
        <input type="text" 
        className="input_field"
        value={weather.searchCity || ""}  
        placeholder="search here" 
        onChange={(e) => {weather.setSearchCity(e.target.value)}}/>
       </>
    )
}

export default Input;