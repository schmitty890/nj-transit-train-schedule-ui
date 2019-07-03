import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <Container>
        <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
        </Row>
        </Container>
    )
}

export default Hero;