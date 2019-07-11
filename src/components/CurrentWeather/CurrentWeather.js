import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./CurrentWeather.module.css";

const CurrentWeather = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                <Col sm={8}>from current weather for {props.currentWeather[0].name} is {props.currentWeather[1].temp}</Col>
                <Col sm={4}>description: {props.currentWeather[2].description}</Col>
            </Row>
            <Row>
                <Col sm>wind speed: {props.currentWeather[3].windSpeed}</Col>
                <Col sm>humidity: {props.currentWeather[4].humidity}</Col>
                <Col sm>icon: {props.currentWeather[9].icon}</Col>
            </Row>
        </Container>
    )
}

export default CurrentWeather;