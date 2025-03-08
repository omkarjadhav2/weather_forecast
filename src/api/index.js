const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1/current.json";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};
