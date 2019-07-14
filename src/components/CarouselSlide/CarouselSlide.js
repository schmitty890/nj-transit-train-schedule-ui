import React from 'react';
import { Button } from 'react-bootstrap';

const CarouselSlide = (props) => {
    return (
        <div keyid={props.key}>
            <Button variant="dark">{props.trainNumber}</Button>
        </div>
    )
}

export default CarouselSlide;