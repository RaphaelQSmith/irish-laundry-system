import styles from '../styles/Home.module.css'
import { Button, Card, Carousel } from 'react-bootstrap'
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
                            Rental Description
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Carousel fade className={styles.rentalCarrousel}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/laundryone.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/laundrytwo.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/laundrythree.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
