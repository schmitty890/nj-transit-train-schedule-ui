import React from "react";
import Slider from "react-slick";
import styles from "./WeatherForecastDetails.module.css";
import WeatherCarouselSlide from '../WeatherCarouselSlide/WeatherCarouselSlide';

class WeatherForecastDetails extends React.Component {
    render() {
        console.log(this.props.weatherForecast);
        var settings = {
            dots: false,
            infinite: false,
            arrows: false,
            speed: 500,
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
            console.log(index + ' ' + weather);
            if(index < 10) {
                return <WeatherCarouselSlide
                    key={index}
                    weatherForecast={weather}
                    city={this.props.currentCity} />
            }

        });

        return (
            <div>
                <div className={styles.title}>Weather forecast for {this.props.currentCity}</div>
                <Slider {...settings}>
                    {forecast}
                </Slider>
            </div>
        );
    }
}

export default WeatherForecastDetails;