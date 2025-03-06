export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${process.env.BASE_URL}&q=${city}&aqi=yes`)
    return await response.json();

}

export const getWeatherDataForLocation = async (lat, lon)=>{
    const response = await fetch(`${process.env.BASE_URL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();

}

