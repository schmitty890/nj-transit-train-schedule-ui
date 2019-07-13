import React, { Component } from 'react';
import { Row, Col, Container, Button, Accordion, Card, Spinner } from 'react-bootstrap';
import styles from "./ListItem.module.css";
import ListItemDetails from '../ListItemDetails/ListItemDetails';
import FaTrain from 'react-icons/lib/fa/train';
import FaClockO from 'react-icons/lib/fa/clock-o';
import railMap from '../../images/Rail_System_Map.svg';

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
            case 'Atl. City Line':
                lineBorderStyle = styles.lineBorderAtlanticCity;
                break;
            case 'Montclair-Boonton':
                lineBorderStyle = styles.lineBorderStyleMontclairBoonton;
                break;
            case 'Main Line':
                lineBorderStyle = styles.lineBorderStyleMain;
                break;
            case 'Raritan Valley':
                lineBorderStyle = styles.lineBorderStyleRaritanValley;
                break;
            case 'Pascack Valley':
                lineBorderStyle = styles.lineBorderPascackValley;
                break;
            case 'Bergen Co. Line ':
                lineBorderStyle = styles.lineBorderBergenCounty;
                break;
            case 'REGIONAL':
            case 'CRESCENT':
            case 'ACELA EXPRESS':
            case 'SILVER METEOR-R':
            case 'KEYSTONE':        
            case 'Amtrak':
                lineBorderStyle = styles.lineBorderStyleAmtrak;
                break;
            default:
                lineBorderStyle = styles.lineBorderDefault;
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
            return <ListItemDetails
                key={index}
                keyid={index}
                trainStopDetails={train} />
        });

        // console.log(this.props.loadingTrainStopDetails);
        if(this.props.loadingTrainStopDetails) {
            // console.log('THE LOADING STATE IS TRUE IN LIST ITEM!');
            trainStopList = <Spinner className={styles.center} animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>;
        }

        return (            
            <Card onClick={(event) => this.props.action(event, this.props)}>
                <Card.Header className={[lineBorderStyle, styles.listItem].join(' ')}>
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
                    <div id="railMap">
                        <img className={styles.railMap} src={railMap} alt="rail map"></img>
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    };
}

export default ListItem;