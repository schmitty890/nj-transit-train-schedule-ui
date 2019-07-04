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

    postCurrentTrains(event, train) {
        event.preventDefault();
        console.log('postCurrentTrains');
        console.log(train);
        const url = `/api/train`;
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

        const url = `/api/train`;
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