import React from "react";
import Slider from "react-slick";
// import styles from "./SearchedTrainsCarousel.module.css";
import WeatherCarouselSlide from '../WeatherCarouselSlide/WeatherCarouselSlide';

class WeatherForecastDetails extends React.Component {
    render() {
        console.log(this.props.weatherForecast);
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        let forecast = null;

        forecast = this.props.weatherForecast.map((weather, index) => {
            console.log(weather);
            return <WeatherCarouselSlide
                key={index}
                weatherForecast={weather} />
        });

        return (
            <Slider {...settings}>
                {forecast}
            </Slider>
        );
    }
}

export default WeatherForecastDetails;