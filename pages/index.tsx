import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  return (
    <div>
      <div>
        <Carousel fade className={styles.caroussel}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/resizeddrum.png"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/resizedworker.png"
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/resizedmachines.png"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr className={styles.hrLines} />
      <div className={styles.description}>
        <p>
          <h4> - Our Services - </h4>
          <h5>
          We do more than simply supply machines. 
          For over 30 years, we have helped to make the world cleaner and laundry effortless by consistently 
          delivering top quality equipment and specialised services you can rely on. 
          With the backing of Electrolux, the world’s largest manufacturer of industrial laundry equipment, 
          we constantly endeavour to identify and meet the requirements of each of our customers – 
          from hospitals to hairdressers. 
          </h5>
        </p>
      </div>
      <hr className={styles.hrLines} />
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
        <Card style={{ width: '18rem', textAlign: "center", paddingTop: "20px" }}>
          <Card.Body>
            <Card.Title>Additional testimonials</Card.Title>
            <Button variant="outline-secondary" href="/clients">Show me more</Button>{' '}


          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
