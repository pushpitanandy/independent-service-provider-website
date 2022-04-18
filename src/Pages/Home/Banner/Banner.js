import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner1.png';
import banner2 from '../../../images/banner2.png';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="450px"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Want to Immigrate to Canada?</h3>
                    <p>Get the desired service <br />To fulfil your dream.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="450px"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Want to become a Citizen of Canada?</h3>
                    <p>Get the desired service<br /> To fulfil your dream.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Banner;