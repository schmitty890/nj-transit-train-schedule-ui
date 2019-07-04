import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <Container>
        <Row>
            <Col sm={12}>
                <div>Train Schedule</div>
            </Col>
        </Row>
        <Row>
            <Col sm>Train 1</Col>
            <Col sm>Train 2</Col>
            <Col sm>Train 3</Col>
        </Row>
        </Container>
    )
}

export default Hero;