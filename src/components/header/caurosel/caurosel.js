import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './caurosel.scss';
const Caurosel = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <p>This will pass too. Enjoy your time at home and spend quality time with your family! Things will be normal soon.</p>
            </Carousel.Item>
            <Carousel.Item>
                <p>Be compassionate! Help those in need like the elderly and poor. They are facing a crisis which we can't even imagine!</p>
            </Carousel.Item>
            <Carousel.Item>
                <p>Help out your employees and domestic workers by not cutting their salaries. Show the true Indian spirit!</p>
            </Carousel.Item>
            <Carousel.Item>
                <p>The virus does not discriminate. Why do you? DO NOT DISCRIMINATE. We are all Indians!</p>
            </Carousel.Item>
            <Carousel.Item>
                <p>Our brothers from the North-East are just as Indian as you! Help everyone during this crisis ❤️</p>
            </Carousel.Item>
        </Carousel>
    );
}
export default Caurosel;