import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import ListItem from '../../components/ListItem/ListItem';
import axios from "axios";
import { Container, Row, Spinner, Accordion } from 'react-bootstrap';

// define base url for http requests
let baseURL = (window.location.hostname === 'localhost') ? 'http://localhost:3001' : 'https://nj-transit-train-schedule-api.herokuapp.com';

// console.log(baseURL);

class TrainSchedule extends Component {

    state = {
        currentStation: '',
        currentStationZip: '',
        forecastWeather: [],
        currentWeather: [
            { name: "" },
            { temp: "" },
            { description: "" },
            { windSpeed: "" },
            { humidity: "" },
            { pressure: "" },
            { cloudiness: "" },
            { sunrise: "" },
            { sunset: "" },
            { icon: "" }
        ],
        trains: [],
        trainStopDetails: [],
        loadingTrainStopDetails: false
    }

    componentDidMount() {
        this.getCurrentTrains();
        this.getCurrentStation();
    }

    postCurrentTrains(event, train) {
        event.preventDefault();
        // console.log('postCurrentTrains');
        // console.log(train);

        let url = `${baseURL}/api/train-current-station`;
        const station = train;
        axios.post(url, {
            station
        }).then(function(response) {
            // console.log(response);
        }).catch(function(error) {
            console.log(error);
        })
        // const url = `https://nj-transit-train-schedule-api.herokuapp.com/api/train`;
        url = `${baseURL}/api/train`;
        // console.log(url);
        axios.post(url, {
            train
          })
          .then(function (response) {
            // console.log(response);
            // window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    postTrainStopDetails = (event, train) => {
        event.preventDefault();
        this.setState({loadingTrainStopDetails: true});
        // console.log('getTrainStopDetails');
        // console.log(train);
        // const url = `https://dv.njtransit.com/webdisplay/train_stops.aspx?train=${train.trainNumber}`;

        const url = `${baseURL}/api/train-details`;
        // console.log(url);

        axios.post(url, {
            train
          })
          .then(response => {
            console.log(response.data.trainDetails);
            this.setState({
                trainStopDetails: response.data.trainDetails,
                loadingTrainStopDetails: false
            });
          })
          .catch(error => {
            console.log(error);
          });
    }

    getCurrentTrains() {
        const url = `${baseURL}/api/train`;
        // console.log(url);
        axios.get(url)
            .then(resp => {
                // console.log(resp.data);
                this.setState({
                    trains: resp.data
                });
            })
            .catch(err => console.log(err));
    }

    getCurrentStation() {
        const url = `${baseURL}/api/train-current-station`;
        // console.log(url);
        axios.get(url)
            .then(resp => {
                // console.log(resp.data[0]);
                this.setState({
                    currentStation: resp.data[0].station,
                    currentStationZip: resp.data[0].zip
                });
                this.getForecastWeather(this.state.currentStationZip);
                this.getCurrentWeather(this.state.currentStationZip);
            })
            .catch(err => console.log(err));
    }

    getForecastWeather(zip) {
        // console.log(zip);
        const url = `${baseURL}/api/weather-forecast/${zip}`;
        // this.setState({ loading: true });
        // // console.log(url);
        axios.get(url)
            .then(resp => {
            // console.log(resp.data);
                //set state for forecast
                this.setState({ 
                    forecastWeather: [...resp.data.list]
                })
            })
            .catch(err => this.setState( { error: 'We have an error :(' } ));
    }

    getCurrentWeather(zip) {
        // console.log('zip');
        const url = `${baseURL}/api/weather-current/${zip}`;
        // console.log(url);
        axios.get(url)
            .then(resp => {
            // console.log(resp.data);
            this.setState({ 
                currentWeather: [
                    { name: resp.data.name },
                    { temp: resp.data.main.temp },
                    { description: resp.data.weather[0].description },
                    { windSpeed: resp.data.wind.speed },
                    { humidity: resp.data.main.humidity },
                    { pressure: resp.data.main.pressure },
                    { cloudiness: resp.data.clouds.all },
                    { sunrise: resp.data.sys.sunrise },
                    { sunset: resp.data.sys.sunset },
                    { icon: resp.data.weather[0].icon }
                ],
                error: ""
            });
            })
            .catch(err => this.setState( { error: 'We have an error :(' } ));
    }

    render() {

        let trainList = null;

        trainList = this.state.trains.map((train, index) => {
            // console.log(train);
            // console.log(train.destination);
            if(train.destination === '') { // if destination is blank, don't render the list item of that train
                return;
            }
            return <ListItem
                key={index}
                keyid={index}
                departure={train.departure}
                trainNumber={train.trainNumber}
                destination={train.destination}
                track={train.track}
                line={train.line}
                status={train.status}
                action={this.postTrainStopDetails}
                trainStopDetails={this.state.trainStopDetails}
                loadingTrainStopDetails={this.state.loadingTrainStopDetails} />
        });


        return (
            <Container>
                <Hero 
                    action={this.postCurrentTrains}
                    currentStation={this.state.currentStation}
                    currentWeather={this.state.currentWeather} />
                <Accordion>
                    {trainList}
                </Accordion>
            </Container>
        );
    }
}

export default TrainSchedule;