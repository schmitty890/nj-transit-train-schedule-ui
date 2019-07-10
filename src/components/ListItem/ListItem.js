import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./ListItem.module.css";
import FaTrain from 'react-icons/lib/fa/train';
import FaClockO from 'react-icons/lib/fa/clock-o';

const ListItem = (props) => {
    console.log('the props');
    console.log(props.status);
    let status = '';
    let destination = '';
    let lineBorderStyle = '';
    if(props.status === '') {
        console.log('status is empty');
        status = 'n/a';
    } else {
        status = props.status;
    }

    switch(props.line) {
        case 'Northeast Corrdr':
            lineBorderStyle = styles.lineBorderStyleNorthEastCorridor;
            break;
        case 'Morristown Line':
            lineBorderStyle = styles.lineBorderStyleMorristown;
            break;
        case 'No Jersey Coast':
            lineBorderStyle = styles.lineBorderStyleNorthJerseyCoast;
            break;
        case 'Montclair-Boonton':
            lineBorderStyle = styles.lineBorderStyleMontclairBoonton;
            break;
    }


    if(props.destination === '') {
        console.log('destination is empty');
        destination = 'n/a';
    } else {
        destination = props.destination;
    }
    return (            
        <Card onClick={(event) => props.action(event, props)}>
            <Card.Header className={lineBorderStyle}>
            <Accordion.Toggle as={Button} variant="link" className={styles.fullWidth} eventKey={props.keyid}>
                <Container>
                    <Row>
                        <Col md><FaClockO />departure: {props.departure}</Col>
                        <Col md>destination: {destination}</Col>
                        <Col md>track #: {props.track}</Col>
                    </Row>
                    <Row>
                        <Col md>line: {props.line}</Col>
                        <Col md>status: {status}</Col>
                        <Col md>trainNumber: {props.trainNumber}</Col>
                    </Row>
                </Container>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.keyid}>
            <Card.Body>on click show details</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ListItem;