import Head from 'next/head'
import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel fade>
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

      <p className={styles.description}>
        <h4> - Our Services - </h4>
        Success in any laundry starts with identifying the requirements and meeting them in the most efficient way possible. 
        To do this, you need a supplier that does more than simply supply machines.
        With the backing of Electrolux, the world’s largest manufacturer of industrial laundry equipment, 
        Irish laundry systems has for over 20 yeas met these requirements. 
        From Hospitals to hairdressers ILS has consistently delivered the best possible solutions to there customers. 
      </p>

      <div className={styles.cardRow}>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Testimonial A</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Mary Smith</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
          </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Testimonial B</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">John Keane</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
        </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Testimonial C</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">David O'Neil</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
          </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
