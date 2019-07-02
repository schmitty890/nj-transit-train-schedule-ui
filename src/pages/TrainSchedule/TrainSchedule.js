import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import axios from "axios";
import { Container, Row, Spinner } from 'react-bootstrap';

class TrainSchedule extends Component {

    state = {
        trains: []
    }

    componentDidMount() {
        this.getCurrentTrains();
    }

    getCurrentTrains() {
        const url = `https://nj-transit-train-schedule-api.herokuapp.com/api/train`;
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
                <Hero />
            </Container>
        );
    }
}

export default TrainSchedule;