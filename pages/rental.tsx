import styles from '../styles/Home.module.css'
import { Card, Carousel, Container } from 'react-bootstrap'
import React from 'react'

export default function rental() {
    return (
        <div>
            <Card style={{ textAlign: "justify", margin: "100px 50px", border: "none" }}>
                <Card.Title> <h2 style={{ textAlign: "center" }}> Exceptional results for minimal effort</h2></Card.Title>
                <Card.Body>
                    <Card.Text>
                        <br />
                            <h5>
                                We offer comprehensive laundry equipment rental service. The contract covers the supply, 
                                installation and service maintenance of a range of Electrolux Professional machines. 
                                Replacement of parts (except filters) are also free of charge. We’ve got you covered! 
                            </h5>
                        <br />
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr className={styles.hrLines} />
            <div>
                    <Carousel className={styles.rentalCarrousel}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/WashMach/WH6-14.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>                
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Dryers/PD9.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Ironers/FIT1.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/WashMach/PW9C.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/WashMach/Quickwash.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/WashMach/WS6-14.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/Dryers/T4900.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    )
}
