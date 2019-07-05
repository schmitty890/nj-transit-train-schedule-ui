import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./ListItem.module.css";

const ListItem = (props) => {
    console.log('the props');
    console.log(props.status);
    let status = '';
    let destination = '';
    if(props.status === '') {
        console.log('status is empty');
        status = 'n/a';
    } else {
        status = props.status;
    }

    if(props.destination === '') {
        console.log('destination is empty');
        destination = 'n/a';
    } else {
        destination = props.destination;
    }
    return (            
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.keyid}>
                <section className={styles.trainWrapper}>
                    <div className={styles.trainInfo}>
                        <div>departure</div>
                        <div>{props.departure}</div>
                    </div>
                    <div className={styles.trainInfo}>
                        <div>destination</div>
                        <div>{destination}</div>
                    </div>
                    <div className={styles.trainInfo}>
                        <div>track #</div>
                        <div>{props.track}</div>
                    </div>
                    <div className={styles.trainInfo}>
                        <div>line</div>
                        <div>{props.line}</div>
                    </div>
                    <div className={styles.trainInfo}>
                        <div>status</div>
                        <div>{status}</div>
                    </div>
                    <div className={styles.trainInfo}>
                        <div>trainNumber</div>
                        <div>{props.trainNumber}</div>
                    </div>
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