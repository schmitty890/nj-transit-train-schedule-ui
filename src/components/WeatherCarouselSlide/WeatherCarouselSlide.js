import React from 'react';
import { Button } from 'react-bootstrap';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";

const WeatherCarouselSlide = (props) => {
    console.log(props);
    const icon = weatherIconAPI.getIcon(props.weatherForecast.weather[0].icon);
    return (
        <div keyid={props.key}>
            <div>{props.weatherForecast.dt}</div>
            <div>{props.weatherForecast.main.temp}</div>
            <div>{icon}</div>
        </div>
    )
}

export default WeatherCarouselSlide;