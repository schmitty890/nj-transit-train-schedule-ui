import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./SearchedTrainDetails.module.css";
import FaTrain from 'react-icons/lib/fa/train';
import FaClockO from 'react-icons/lib/fa/clock-o';


const SearchedTrainDetails = (props) => {
    console.log(props);
    let trainDetails;
    trainDetails = props.searchedTrainDetails.map((trainDetail, index) => {
        if(trainDetail === '') {
            return;
        }
        return <li key={index}>{trainDetail}</li>;
    });
    return (
        <Card>
            <Card.Body>
                <Card.Title>Train Searched Details</Card.Title>
                <Card.Text>
                    <ul>
                        {trainDetails}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SearchedTrainDetails;