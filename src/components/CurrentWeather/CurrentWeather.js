import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./CurrentWeather.module.css";
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";

const CurrentWeather = (props) => {
    // console.log(props);
    const icon = weatherIconAPI.getIcon(props.currentWeather[9].icon);
    return (
        <Container className={styles.weatherContainer}>
            {/* <Row> */}
                {/* <Col sm> */}
                    <div>
                        <div className={styles.temp}>{props.currentWeather[1].temp}</div>
                        <div className={styles.description}>{props.currentWeather[2].description}</div>
                    </div>
                {/* </Col> */}
                {/* <Col sm> */}
                    <div className={styles.icon}>{icon}</div>
                {/* </Col> */}
            {/* </Row> */}
            {/* <Row>
                <Col sm>wind speed: {props.currentWeather[3].windSpeed}</Col>
                <Col sm>humidity: {props.currentWeather[4].humidity}</Col>
                <Col sm>icon: {icon}</Col>
            </Row> */}
        </Container>
    )
}

export default CurrentWeather;