import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./Hero.module.css";
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const Hero = (props) => {
    console.log(props);
    return (
        <Container>
            <CurrentWeather
                currentWeather={props.currentWeather} />
            <Row>
                <Col sm={12} className={styles.hero}>
                    <img className={styles.heroImage} src="//via.placeholder.com/250x100" data-src="//via.placeholder.com/250x100" />
                    <div className={styles.heroTitle}>Current Train Schedule: {props.currentStation}</div>
                    <Button variant="success" onClick={(event) => props.action(event, 'hamilton')}>Hamilton</Button>
                    <Button variant="success" onClick={(event) => props.action(event, 'nyp')}>New York Penn</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;