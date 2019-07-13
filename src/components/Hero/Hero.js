import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./Hero.module.css";
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import logo from '../../images/logo.png';

const Hero = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                <Col sm={4} className={styles.hero}>
                    <img className={styles.heroImage} src={logo} />
                    {/* <div className={styles.heroTitle}>{props.currentStation}</div> */}
                </Col>
                <Col sm={4} className={styles.hero}>
                    <div className={styles.currentStation}>Current station: {props.currentStation}</div>
                </Col>
                <Col sm={4} className={styles.hero}>
                    <CurrentWeather
                        currentWeather={props.currentWeather} />
                </Col>
            </Row>
            <Row>
                <Col sm={12} className={styles.hero}>
                    {/* <div className={styles.heroTitle}>{props.currentStation}</div> */}
                    {/* <div>Choose a station</div> */}
                    <div className={styles.controlSection}>
                        <Button variant="primary" className={styles.controlButton}><a href="https://www.njtransit.com/pdf/rail/Rail_System_Map.pdf" target="_blank">View transit map</a></Button>
                        <Dropdown className={styles.controlDropdown}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Choose a station
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={styles.dropdown}>
                                <Dropdown.Item onClick={(event) => props.action(event, 'hamilton')}>Hamilton</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => props.action(event, 'nyp')}>New York Penn</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;