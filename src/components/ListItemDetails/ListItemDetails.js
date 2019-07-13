import React from 'react';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import styles from "./ListItem.module.css";
import FaTrain from 'react-icons/lib/fa/train';
import FaClockO from 'react-icons/lib/fa/clock-o';


const ListItemDetails = (props) => {
    // console.log(props);

    return (
        <div>
            <div keyid={props.keyid}>{props.trainStopDetails}</div>
        </div>
        
    )
}

export default ListItemDetails;