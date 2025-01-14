import React from "react";
import "../App.css"
import { useWheather } from "../context/weather";
const Card = (props) =>{

  const weather = useWheather();
    return (
       <div className="Card">
         <img src={weather.data?.current?.condition?.icon} alt="imaged" />
         <h4>{weather.data?.current?.condition?.text}</h4>
        <h2>{weather.data?.current?.temp_c} `C</h2>
       <h5>{weather.data?.location?.name}, 
        <br></br>
       {weather.data?.location?.region}, 
       <br></br>
       {weather.data?.location?.country}
       
       </h5>
       </div>
    )
}

export default Card;