import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import axios from "axios";
import { Container, Row, Spinner } from 'react-bootstrap';

// define base url for http requests
let baseURL = (window.location.hostname === 'localhost') ? 'http://localhost:3001' : 'https://nj-transit-train-schedule-api.herokuapp.com';

console.log(baseURL);

class TrainSchedule extends Component {

    state = {
        trains: []
    }

    componentDidMount() {
        this.getCurrentTrains();
    }

    postCurrentTrains(event, train) {
        event.preventDefault();
        console.log('postCurrentTrains');
        console.log(train);
        // const url = `https://nj-transit-train-schedule-api.herokuapp.com/api/train`;
        const url = `${baseURL}/api/train`;
        console.log(url);
        axios.post(url, {
            train
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });      
    }

    getCurrentTrains() {

        // const url = `https://nj-transit-train-schedule-api.herokuapp.com/api/train`;
        const url = `${baseURL}/api/train`;
        console.log(url);
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                this.setState({
                    trains: resp.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Hero 
                    action={this.postCurrentTrains} />
            </Container>
        );
    }
}

export default TrainSchedule;