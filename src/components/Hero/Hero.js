import React from 'react';
import { Row, Col, Container, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import styles from "./Hero.module.css";

const Hero = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={12} className={styles.hero}>
                    <div>Train Schedule</div>
                    <Button variant="success" onClick={(event) => props.action(event, 'hamilton')}>Hamilton</Button>
                    <Button variant="success" onClick={(event) => props.action(event, 'nyp')}>New York Penn</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;