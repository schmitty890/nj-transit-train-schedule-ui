import React from "react";
import Slider from "react-slick";
import styles from "./SearchedTrainsCarousel.module.css";
import CarouselSlide from '../CarouselSlide/CarouselSlide';

class SearchedTrainsCarousel extends React.Component {
    render() {
        console.log(this.props.searchedTrains);
        var settings = {
            dots: true,
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
        let trainButtonNumbers = null;

        trainButtonNumbers = this.props.searchedTrains.map((trainSearched, index) => {
            // console.log(trainSearched.trainNumber);
            return <CarouselSlide
                key={index}
                trainNumber={trainSearched.trainNumber} />
        });

        return (
            <Slider {...settings}>
                {trainButtonNumbers}
            </Slider>
        );
    }
}

export default SearchedTrainsCarousel;