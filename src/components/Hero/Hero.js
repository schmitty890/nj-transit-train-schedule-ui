import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./Hero.module.css";
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import logo from '../../images/logo.png';

const Hero = (props) => {
    // console.log(props);
    return (
        <Container>
            <CurrentWeather
                currentWeather={props.currentWeather} />
            <Row>
                <Col sm={12} className={styles.hero}>
                    <img className={styles.heroImage} src={logo} />
                    <div className={styles.heroTitle}>Current Train Schedule: {props.currentStation}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose a station
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={(event) => props.action(event, 'hamilton')}>Hamilton</Dropdown.Item>
                            <Dropdown.Item onClick={(event) => props.action(event, 'nyp')}>New York Penn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;