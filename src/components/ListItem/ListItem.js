import React, { Component } from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./ListItem.module.css";
import ListItemDetails from '../ListItemDetails/ListItemDetails';
import FaTrain from 'react-icons/lib/fa/train';
import FaClockO from 'react-icons/lib/fa/clock-o';

class ListItem extends Component {

// const ListItem = (props) => {

    render() {
        // console.log('the props');
        // console.log(props.status);
        let status = '';
        let destination = '';
        let lineBorderStyle = '';
        if(this.props.status === '') {
            // console.log('status is empty');
            status = 'n/a';
        } else {
            status = this.props.status;
        }

        switch(this.props.line) {
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


        if(this.props.destination === '') {
            // console.log('destination is empty');
            destination = 'n/a';
        } else {
            destination = this.props.destination;
        }

        let trainStopList = null;

        // // console.log(props.trainStopDetails);
        trainStopList = this.props.trainStopDetails.map((train, index) => {
            console.log('hi');
            console.log(index + ' ' + train);
        //     // console.log(train.destination);
        //     // if(train.destination === '') { // if destination is blank, don't render the list item of that train
        //     //     return;
        //     // }
        //     console.log('yee');
            return <ListItemDetails
                eventKey={index}
                trainStopDetails={train} />
        });

        return (            
            <Card onClick={(event) => this.props.action(event, this.props)}>
                <Card.Header className={lineBorderStyle}>
                <Accordion.Toggle as={Button} variant="link" className={styles.fullWidth} eventKey={this.props.keyid}>
                    <Container>
                        <Row>
                            <Col md><FaClockO />departure: {this.props.departure}</Col>
                            <Col md>destination: {destination}</Col>
                            <Col md>track #: {this.props.track}</Col>
                        </Row>
                        <Row>
                            <Col md>line: {this.props.line}</Col>
                            <Col md>status: {status}</Col>
                            <Col md>trainNumber: {this.props.trainNumber}</Col>
                        </Row>
                    </Container>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.keyid}>
                <Card.Body>
                    {trainStopList}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    };
}

export default ListItem;