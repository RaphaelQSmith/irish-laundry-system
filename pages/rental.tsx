import styles from '../styles/Home.module.css'
import { Button, Card, Carousel, Container } from 'react-bootstrap'
import React from 'react'

export default function rental() {
    return (
        <div>
            <div className={styles.serviceCard}>
                <p>
                   <h3> Rental Services: </h3>
                   <br/>
                        <h5>    
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                                <li>Vivamus vestibulum ntulla nec ante.</li>
                                <li>Praesent placerat risus quis eros.</li>
                                <li>Fusce pellentesque suscipit nibh.</li>
                                <li>Integer vitae libero ac risus egestas placerat.</li>
                            </ul>
                        </h5>    
                </p>
            </div>
            <hr className={styles.hrLines} />
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
