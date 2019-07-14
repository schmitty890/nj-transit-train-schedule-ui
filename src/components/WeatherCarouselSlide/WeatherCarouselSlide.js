import React from 'react';
import { Button } from 'react-bootstrap';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";
import styles from './WeatherCarouselSlide.module.css';
import Moment from 'react-moment';

const WeatherCarouselSlide = (props) => {
    console.log(props);
    const icon = weatherIconAPI.getIcon(props.weatherForecast.weather[0].icon);
    return (
        <div keyid={props.key} className={styles.weatherWrapper}>
            <div><Moment fromNow>{props.weatherForecast.dt_txt}</Moment></div>
            <div>{props.weatherForecast.main.temp}</div>
            <div>{icon}</div>
            <div>{props.weatherForecast.weather[0].description}</div>
        </div>
    )
}

export default WeatherCarouselSlide;