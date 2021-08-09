import styles from '../styles/Home.module.css'
import { Button, Card, Carousel, Container } from 'react-bootstrap'
import React from 'react'

export default function rental() {
    return (
        <div>
            <div className={styles.serviceCard}>
                <Card>
                    <Card.Header>Services</Card.Header>
                    <Card.Body className={styles.serviceCardBody}>
                        <Card.Title>Rental Services:</Card.Title>
                        <Card.Text>
                            <ol>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                                <li>Vivamus vestibulum ntulla nec ante.</li>
                                <li>Praesent placerat risus quis eros.</li>
                                <li>Fusce pellentesque suscipit nibh.</li>
                                <li>Integer vitae libero ac risus egestas placerat.</li>
                            </ol>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Container>
                    <Carousel fade className={styles.rentalCarrousel}>
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
                                src="/WashMach/WH6-6.jpg"
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
                    </Carousel>
                </Container>
            </div>
        </div>
    )
}
