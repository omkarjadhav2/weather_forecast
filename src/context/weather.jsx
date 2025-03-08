import { createContext , useState ,useContext} from "react";
import React  from "react";
import { getWeatherDataForCity , getWeatherDataForLocation } from "../api";

const weathercontext = createContext(null);

export const useWeather = () => {  
    return useContext(weathercontext);
}

export const Weatherprovider = (props) =>{

    const [data, setData] = useState(null);
    const [searchCity , setSearchCity] = useState(null)

    const fetchdata = async () =>{
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(
                position.coords.latitude , 
                position.coords.longitude
            ).then((data) => setData(data));
        });
    }

    const refreshData = async () => {
        if (searchCity) {
            await fetchCurrentUserLocationData();
        }
    };


    return <weathercontext.Provider value={{data, searchCity , setSearchCity , fetchdata ,fetchCurrentUserLocationData , refreshData} }>
        {props.children}
    </weathercontext.Provider>
}