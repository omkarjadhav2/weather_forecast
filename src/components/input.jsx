import React, { useState, useEffect } from "react";
import { useWeather } from "../context/weather";
import "../App.css";

const Input = () => {
    const weather = useWeather();
    const [inputValue, setInputValue] = useState(weather.searchCity || "");

    useEffect(() => {
        const timer = setTimeout(() => {
            weather.setSearchCity(inputValue);
        }, 1000); // 5 seconds delay

        return () => clearTimeout(timer); // Clear timeout on every re-render
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                className="input_field"
                value={inputValue}
                placeholder="search here"
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    );
};

export default Input;
