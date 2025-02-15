const baseUrl = "https://api.weatherapi.com/v1/current.json?key= 01f749ae4f2c4a02bc365257251301";
export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json();

}

export const getWeatherDataForLocation = async (lat, lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return await response.json();

}

