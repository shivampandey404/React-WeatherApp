import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhopal",
        temp: 39.13,
        tempMin: 38.43,
        tempMax: 39.13,
        humidity: 12,
        feelsLike: 36.45,
        weather: "scattered clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div>
            <h2 className="WeatherApp">Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}