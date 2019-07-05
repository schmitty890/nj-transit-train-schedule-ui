import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./Hero.module.css";

const Hero = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={12} className={styles.hero}>
                    <div>Train Schedule</div>
                    <Button variant="outline-info" onClick={(event) => props.action(event, 'hamilton')}>get train schedule</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;