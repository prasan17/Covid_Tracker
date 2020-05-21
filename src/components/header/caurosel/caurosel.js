import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Caurosel = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <p>{props.carouseltext}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Caurosel;