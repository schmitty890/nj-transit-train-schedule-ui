import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import axios from "axios";
import { Container, Row, Spinner } from 'react-bootstrap';

console.log(process.env.NODE_ENV);
let baseURL = ''
if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3001';
} else if(process.env.NODE_ENV === 'production') {
    baseURL = 'https://nj-transit-train-schedule-api.herokuapp.com';
}

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
        console.log('setupProxy.js');
        console.log(process.env.NODE_ENV);
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