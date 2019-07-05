import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./ListItem.module.css";

const ListItem = (props) => {
    console.log('the props');
    console.log(props);
    return (            
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.keyid}>
                <section className={styles.trainWrapper}>
                    <div>departure: {props.departure}</div>
                    <div>destination: {props.destination}</div>
                    <div>track #: {props.track}</div>
                    <div>line: {props.line}</div>
                    <div>status: {props.status}</div>
                    <div>train #: {props.trainNumber}</div>
                </section>
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.keyid}>
            <Card.Body>on click show details</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ListItem;