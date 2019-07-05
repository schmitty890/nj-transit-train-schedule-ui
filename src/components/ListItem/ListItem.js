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
                {props.departure}
                {props.destination}
                {props.track}
                {props.line}
                {props.status}
                {props.trainNumber}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.keyid}>
            <Card.Body>on click show details</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ListItem;